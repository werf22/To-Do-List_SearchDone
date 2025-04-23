import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { MultiSelect } from '@/components/ui/MultiSelect';
import { DatePicker } from '@/components/ui/date-picker';
import { X, RotateCcw } from 'lucide-react';
import { TASK_FIELD_CONFIG, PORTFOLIO_PROJECT_SECTION, TaskFieldConfig } from '@/config/TASK_FIELD_CONFIG';
import { getDefaultValue, RangeValue as FilterRangeValue, AllFiltersState } from '@/lib/filterUtils';

interface AdvancedFiltersProps {
  onClose: () => void;
  initialFilters: AllFiltersState;
  onChange: (filters: AllFiltersState) => void;
}

function isRangeValue(value: any): value is FilterRangeValue {
  return typeof value === 'object' && value !== null && ('gte' in value || 'lte' in value);
}

export const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ onClose, initialFilters: parentInitialFilters, onChange }) => {
  const [localFilters, setLocalFilters] = useState<AllFiltersState>({} as AllFiltersState);

  useEffect(() => {
    setLocalFilters(parentInitialFilters);
  }, [parentInitialFilters]);

  const [availableProjects, setAvailableProjects] = useState<string[]>([]);
  const [availableSections, setAvailableSections] = useState<string[]>([]);

  const prevPortfolioRef = useRef(localFilters.portfolio);
  const prevProjectRef = useRef(localFilters.project);

  useEffect(() => {
    const prevPortfolio = prevPortfolioRef.current;
    if (prevPortfolio !== localFilters.portfolio) {
      const primaryPortfolio = localFilters.portfolio?.[0];
      if (typeof primaryPortfolio === 'string' && PORTFOLIO_PROJECT_SECTION[primaryPortfolio]) {
        setAvailableProjects(Object.keys(PORTFOLIO_PROJECT_SECTION[primaryPortfolio]));
      } else {
        setAvailableProjects([]);
        if (localFilters.project || localFilters.section) {
          setLocalFilters((prev: AllFiltersState): AllFiltersState => {
            const newState = { ...prev };
            newState.project = getDefaultValue(TASK_FIELD_CONFIG.project) as AllFiltersState['project'];
            newState.section = getDefaultValue(TASK_FIELD_CONFIG.section) as AllFiltersState['section'];
            return newState;
          });
        }
      }
    }
    prevPortfolioRef.current = localFilters.portfolio;
  }, [localFilters.portfolio]);

  useEffect(() => {
    const prevProject = prevProjectRef.current;
    if (prevProject !== localFilters.project) {
      const primaryPortfolio = localFilters.portfolio?.[0];
      const primaryProject = localFilters.project?.[0];
      if (
        typeof primaryPortfolio === 'string' &&
        PORTFOLIO_PROJECT_SECTION[primaryPortfolio] &&
        typeof primaryProject === 'string' &&
        PORTFOLIO_PROJECT_SECTION[primaryPortfolio][primaryProject]
      ) {
        setAvailableSections(PORTFOLIO_PROJECT_SECTION[primaryPortfolio][primaryProject]);
      } else {
        setAvailableSections([]);
        if (localFilters.section) {
          setLocalFilters((prev: AllFiltersState): AllFiltersState => {
            const newState = { ...prev };
            newState.section = getDefaultValue(TASK_FIELD_CONFIG.section) as AllFiltersState['section'];
            return newState;
          });
        }
      }
    }
    prevProjectRef.current = localFilters.project;
  }, [localFilters.project, localFilters.portfolio]);

  const handleFilterChange = useCallback(
    (
      field: string,
      value: string | boolean | string[] | FilterRangeValue | undefined | null
    ) => {
      setLocalFilters(prevFilters => {
        const newFilters = { ...prevFilters };
        const config = TASK_FIELD_CONFIG[field];
        let processedValue: FilterRangeValue | string[] | boolean | string | undefined;

        if (config.type === 'date' || config.type === 'number') {
          let processedRange: FilterRangeValue | undefined = undefined;

          if (Array.isArray(value) && value.length === 2) {
            const potentialGte = (value as any[])[0];
            const potentialLte = (value as any[])[1];

            let gteValue: Date | number | null = null;
            let lteValue: Date | number | null = null;

            try {
              if (potentialGte != null && potentialGte !== '') {
                if (config.type === 'date') {
                  const date = new Date(potentialGte as string | Date);
                  if (!isNaN(date.getTime())) gteValue = date;
                } else { // number
                  const num = parseFloat(String(potentialGte));
                  if (!isNaN(num)) gteValue = num;
                }
              }
              if (potentialLte != null && potentialLte !== '') {
                if (config.type === 'date') {
                  const date = new Date(potentialLte as string | Date);
                  if (!isNaN(date.getTime())) lteValue = date;
                } else { // number
                  const num = parseFloat(String(potentialLte));
                  if (!isNaN(num)) lteValue = num;
                }
              }
            } catch (e) {
              console.error("Error converting range value:", e);
              gteValue = null;
              lteValue = null;
            }

            if (gteValue !== null || lteValue !== null) {
              processedRange = { gte: gteValue, lte: lteValue };
            }
          } else if (typeof value === 'object' && value !== null && !Array.isArray(value) && ('gte' in value || 'lte' in value)) {
            const rangeInput = value as Partial<FilterRangeValue>;
            const gte = rangeInput.gte != null ? rangeInput.gte : undefined;
            const lte = rangeInput.lte != null ? rangeInput.lte : undefined;

            if (gte != null || lte != null) {
              processedRange = {
                gte: gte ?? undefined,
                lte: lte ?? undefined
              };
            }
          }

          const defaultRangeValue = getDefaultValue(config) as FilterRangeValue | undefined;
          processedValue = processedRange ?? defaultRangeValue;

          if (processedValue?.gte == null && processedValue?.lte == null) {
            processedValue = defaultRangeValue;
          }
        } else if (config.type === 'multi-select') {
          if (Array.isArray(value)) {
            const valueArray = value as string[];
            const multiSelectValue = valueArray.filter(Boolean);
            const defaultMultiSelectValue = getDefaultValue(config) as string[] | undefined;
            processedValue = multiSelectValue.length === 0 ? defaultMultiSelectValue : multiSelectValue;
          } else {
            processedValue = getDefaultValue(config) as string[] | undefined;
          }
        } else if (config.type === 'checkbox') {
          processedValue = typeof value === 'boolean' ? value : (getDefaultValue(config) as boolean | undefined);
        } else { // text, textarea, dropdown
          const defaultSimpleValue = getDefaultValue(config) as string | undefined;
          processedValue = value != null && value !== '' ? String(value) : defaultSimpleValue;
        }

        const defaultValForComparison = getDefaultValue(config);

        let isDefault = false;
        if (JSON.stringify(processedValue) === JSON.stringify(defaultValForComparison)) {
          isDefault = true;
        } else if (config.type === 'date' || config.type === 'number') {
          const currentRange = processedValue as FilterRangeValue | undefined;
          const defaultRange = defaultValForComparison as FilterRangeValue | undefined;
          // Check if both current and default represent an empty range
          if (currentRange?.gte == null && currentRange?.lte == null &&
              defaultRange?.gte == null && defaultRange?.lte == null) {
            isDefault = true;
          }
        } else if (config.type === 'multi-select') {
          const currentArray = processedValue as string[] | undefined;
          const defaultArray = defaultValForComparison as string[] | undefined;
          // Check if both current and default represent an empty selection (null, undefined, or empty array)
          const isCurrentEmpty = currentArray == null || currentArray.length === 0;
          const isDefaultEmpty = defaultArray == null || defaultArray.length === 0;
          if (isCurrentEmpty && isDefaultEmpty) {
            isDefault = true;
          }
        } else if (typeof processedValue === 'string' && processedValue === '' && defaultValForComparison === undefined) {
          isDefault = true;
        }

        if (isDefault) {
          delete newFilters[field];
        } else {
          newFilters[field as keyof AllFiltersState] = processedValue as AllFiltersState[typeof field];
        }
        return newFilters;
      });
    },
    [localFilters]
  );

  const handleClearFilters = useCallback(() => {
    const defaultState = {} as AllFiltersState;
    setLocalFilters(defaultState);
    onChange(defaultState);
    onClose();
  }, [onChange, onClose]);

  const handleApplyFilters = useCallback(() => {
    onChange(localFilters);
    onClose();
  }, [localFilters, onChange, onClose]);

  const renderFilterControl = (fieldKey: keyof typeof TASK_FIELD_CONFIG) => {
    const config = TASK_FIELD_CONFIG[fieldKey];
    if (!config || !config.filterable) return null;

    const fieldId = `adv-filter-${fieldKey}`;
    const value = localFilters[fieldKey];
    let control: React.ReactNode = null;

    switch (config.type) {
      case 'text':
      case 'textarea':
        control = (
          <Input
            id={fieldId}
            type={config.type === 'textarea' ? 'textarea' : 'text'}
            value={String(value ?? '')}
            onChange={(e) => handleFilterChange(fieldKey, e.target.value)}
            placeholder={config.label}
          />
        );
        break;

      case 'number': {
        const numValue = value as FilterRangeValue | undefined;
        control = (
          <div className="flex space-x-2">
            <Label htmlFor={`${fieldKey}-gte`} className="text-xs">From:</Label>
            <Input
              type="number"
              value={numValue?.gte != null ? String(numValue.gte) : ''}
              onChange={(e) => {
                const currentVal = typeof value === 'object' && value !== null ? value : {};
                handleFilterChange(fieldKey, { ...currentVal, gte: parseFloat(e.target.value) });
              }}
            />
            <Label htmlFor={`${fieldKey}-lte`} className="text-xs">To:</Label>
            <Input
              type="number"
              value={numValue?.lte != null ? String(numValue.lte) : ''}
              onChange={(e) => {
                const currentVal = typeof value === 'object' && value !== null ? value : {};
                handleFilterChange(fieldKey, { ...currentVal, lte: parseFloat(e.target.value) });
              }}
            />
          </div>
        );
        break;
      }

      case 'date':
        control = (
          <div className="flex space-x-2 items-center">
            <Label htmlFor={`${fieldKey}-gte`} className="text-xs">From:</Label>
            <DatePicker
              date={(value as FilterRangeValue | undefined)?.gte ? new Date((value as FilterRangeValue).gte!) : undefined}
              setDate={(d: Date | undefined) => {
                const currentVal = typeof value === 'object' && value !== null ? value : {};
                handleFilterChange(fieldKey, { ...currentVal, gte: d });
              }}
            />
            <Label htmlFor={`${fieldKey}-lte`} className="text-xs">To:</Label>
            <DatePicker
              date={(value as FilterRangeValue | undefined)?.lte ? new Date((value as FilterRangeValue).lte!) : undefined}
              setDate={(d: Date | undefined) => {
                const currentVal = typeof value === 'object' && value !== null ? value : {};
                handleFilterChange(fieldKey, { ...currentVal, lte: d });
              }}
            />
          </div>
        );
        break;

      case 'multi-select': {
        let multiSelectOptions: string[] = [];
        if (fieldKey === 'portfolio') {
          multiSelectOptions = config.options || []; // CORRECT: Use static portfolio options from config
        } else if (fieldKey === 'project') {
          multiSelectOptions = availableProjects;
        } else if (fieldKey === 'section') {
          multiSelectOptions = availableSections;
        } else {
          multiSelectOptions = config.options || [];
        }

        control = (
          <MultiSelect
            label={config.label}
            value={Array.isArray(localFilters[fieldKey]) ? localFilters[fieldKey] as string[] : []}
            onChange={(newValue) => handleFilterChange(fieldKey, newValue)}
            options={multiSelectOptions}
            placeholder={`-- Select ${config.label} --`}
          />
        );
        break;
      }

      case 'dropdown': {
        const currentDropdownValue = localFilters[fieldKey];
        control = (
          <Select
            value={String(currentDropdownValue ?? '')}
            onValueChange={(val) => handleFilterChange(fieldKey, val === '' ? undefined : val)}
          >
            <SelectTrigger id={fieldId}>
              <SelectValue placeholder={`-- Select ${config.label} --`} />
            </SelectTrigger>
            <SelectContent>
              {config.options?.filter(Boolean).map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        break;
      }

      case 'checkbox':
        control = (
          <div className="flex items-center space-x-2 h-10">
            <Checkbox
              id={fieldId}
              checked={!!localFilters[fieldKey as keyof AllFiltersState]} // Ensure value is boolean
              onCheckedChange={(checked) => handleFilterChange(fieldKey, !!checked)}
            />
            <Label htmlFor={fieldId} className="whitespace-nowrap">{config.label}</Label>
          </div>
        );
        break;
    }

    return (
      <div key={fieldKey} className="mb-4">
        <Label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-1">
          {config.label}
        </Label>
        {control}
      </div>
    );
  };

  const filterableKeys = useMemo(() => {
    const keys = Object.keys(TASK_FIELD_CONFIG)
      .filter(key => TASK_FIELD_CONFIG[key as keyof typeof TASK_FIELD_CONFIG].filterable);
    console.log('Calculated filterableKeys:', keys); // <-- ADD LOG
    return keys as (keyof typeof TASK_FIELD_CONFIG)[];
  }, [TASK_FIELD_CONFIG]);

  return (
    <div className="p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6 max-h-[60vh] overflow-y-auto pr-2">
        {filterableKeys.map((field: keyof typeof TASK_FIELD_CONFIG) => {
          console.log('Rendering filter control for key:', field); // <-- ADD LOG
          return renderFilterControl(field);
        })}
      </div>
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button variant="ghost" onClick={handleClearFilters}>Clear Filters</Button>
        <Button onClick={handleApplyFilters}>Apply Filters</Button> 
      </div>
    </div>
  );
};

export default AdvancedFilters;
