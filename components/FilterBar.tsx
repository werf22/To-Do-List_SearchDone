'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from "@/components/ui/badge";
import { Check, ChevronsUpDown, Filter, X, SlidersHorizontal, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TASK_FIELD_CONFIG, PORTFOLIO_PROJECT_SECTION } from '@/config/TASK_FIELD_CONFIG';
import { getDefaultValue, RangeValue, AllFiltersState } from '@/lib/filterUtils'; // Import from filterUtils
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdvancedFilters from './AdvancedFilters';
import { Label } from '@/components/ui/label'; // Added missing Label import

interface FilterBarProps {
  onFilterChange: (filters: AllFiltersState) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const initialState: AllFiltersState = {};
  Object.keys(TASK_FIELD_CONFIG).forEach(key => {
    const config = TASK_FIELD_CONFIG[key as keyof typeof TASK_FIELD_CONFIG];
    if (config.filterable) {
      initialState[key as keyof typeof TASK_FIELD_CONFIG] = config.defaultFilterValue ?? getDefaultValue(config);
    }
  });
  initialState.hideEmptyFilters = true;

  const [allFilters, setAllFilters] = useState<AllFiltersState>(() => initialState);
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);

  // Ref to store the initial filters to prevent calling onFilterChange on first render
  const initialFiltersRef = useRef(initialState);

  const handleFilterChange = (field: keyof typeof TASK_FIELD_CONFIG, value: string | boolean | string[] | undefined | null) => {
    setAllFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      const config = TASK_FIELD_CONFIG[field];

      let processedValue: string | boolean | string[] | undefined;

      // Process value based on type
      if (config.type === 'multi-select') {
        processedValue = Array.isArray(value) ? value.filter(Boolean) : [];
      } else if (config.type === 'checkbox') {
        processedValue = typeof value === 'boolean' ? value : undefined; // Default to undefined if not boolean
      } else { // dropdown, text, etc. (single string value)
        processedValue = value != null && value !== '' ? String(value) : undefined;
      }

      // Get default value for comparison
      const defaultValue = getDefaultValue(config);

      // Determine if the processed value is effectively the default
      let isDefault = false;
      if (JSON.stringify(processedValue) === JSON.stringify(defaultValue)) {
          isDefault = true;
      } else if (config.type === 'multi-select') {
          const currentArray = processedValue as string[] | undefined;
          const defaultArray = defaultValue as string[] | undefined;
          const isCurrentEmpty = currentArray == null || currentArray.length === 0;
          const isDefaultEmpty = defaultArray == null || defaultArray.length === 0;
          if (isCurrentEmpty && isDefaultEmpty) {
              isDefault = true;
          }
      } else if (typeof processedValue === 'string' && processedValue === '' && defaultValue === undefined) {
          isDefault = true; // Empty string vs undefined default
      } else if (processedValue === undefined && defaultValue === undefined) {
          isDefault = true;
      } else if (processedValue === false && defaultValue === false) { // Handle checkbox default
          isDefault = true;
      }


      // Update filter state: remove if default, otherwise set
      if (isDefault) {
        delete newFilters[field];
      } else {
        newFilters[field] = processedValue as any; // Assign processed value
      }

      // Cascade resets for portfolio/project/section
      // Use the *updated* newFilters state for checking portfolio/project values
      if (field === 'portfolio') {
          // Always reset project and section when portfolio changes explicitly
          delete newFilters.project;
          delete newFilters.section;
      } else if (field === 'project') {
          // Always reset section when project changes explicitly
          delete newFilters.section;
      }

      return newFilters; // Return the new state for setAllFilters
    });
  };

  const handleAdvancedFilterChange = (changedAdvancedFilters: Partial<Omit<AllFiltersState, 'hideEmptyFilters'>>) => {
    // Calculate the full new state first
    const newFilters = { ...allFilters, ...changedAdvancedFilters };

    // Update local state
    setAllFilters(newFilters);

    // Update parent state with the new state
    onFilterChange(newFilters);
  };

  // Fetch options dynamically based on current selections
  const getProjectOptions = useCallback((): string[] => {
    const selectedPortfolios = allFilters.portfolio as string[] | undefined;
    if (typeof TASK_FIELD_CONFIG.project?.getOptions === 'function') {
        // Pass undefined if selectedPortfolios is empty or not an array
        const portfoliosArg = Array.isArray(selectedPortfolios) && selectedPortfolios.length > 0 ? selectedPortfolios : undefined;
        return TASK_FIELD_CONFIG.project.getOptions(portfoliosArg);
    }
    return TASK_FIELD_CONFIG.project?.options || [];
  }, [allFilters.portfolio]);

  const getSectionOptions = useCallback((): string[] => {
    const selectedPortfolios = allFilters.portfolio as string[] | undefined;
    const selectedProjects = allFilters.project as string[] | undefined;
    if (typeof TASK_FIELD_CONFIG.section?.getOptions === 'function') {
         // Pass undefined if arrays are empty or not arrays
        const portfoliosArg = Array.isArray(selectedPortfolios) && selectedPortfolios.length > 0 ? selectedPortfolios : undefined;
        const projectsArg = Array.isArray(selectedProjects) && selectedProjects.length > 0 ? selectedProjects : undefined;
        return TASK_FIELD_CONFIG.section.getOptions(portfoliosArg, projectsArg);
    }
    return TASK_FIELD_CONFIG.section?.options || [];
  }, [allFilters.portfolio, allFilters.project]);

  const handleResetFilters = () => {
    // Calculate the initial state
    const initialState: AllFiltersState = {};
    Object.keys(TASK_FIELD_CONFIG).forEach(key => {
      const config = TASK_FIELD_CONFIG[key as keyof typeof TASK_FIELD_CONFIG];
      if (config.filterable) {
        initialState[key as keyof typeof TASK_FIELD_CONFIG] = config.defaultFilterValue ?? getDefaultValue(config);
      }
    });
    initialState.hideEmptyFilters = true;

    // Update local state
    setAllFilters(initialState);
    // Update parent state
    onFilterChange(initialState);
  };

  const calculateActiveFilterCount = (filters: AllFiltersState): number => {
    let count = 0;
    Object.keys(filters).forEach(key => {
      if (key === 'hideEmptyFilters') return;
      const config = TASK_FIELD_CONFIG[key as keyof typeof TASK_FIELD_CONFIG];
      if (!config || !config.filterable) return;

      const value = filters[key as keyof AllFiltersState];
      const defaultValue = config.defaultFilterValue ?? getDefaultValue(config);

      if (Array.isArray(value)) {
        if (value.length > 0) count++;
      } else if (value !== defaultValue && value !== undefined && value !== null && value !== '') {
        if (config.type === 'date' && Array.isArray(value) && value.every(d => d === undefined)) {
        } else {
          count++;
        }
      }
    });
    return count;
  };

  const activeFilterCount = calculateActiveFilterCount(allFilters);

  useEffect(() => {
    // Avoid calling on initial render if filters haven't changed meaningfully yet
    // Simple check: if filters are not the initial state (this might need refinement)
    if (JSON.stringify(allFilters) !== JSON.stringify(initialFiltersRef.current)) {
        console.log('FilterBar: useEffect detected change in allFilters, notifying parent:', allFilters);
        onFilterChange(allFilters);
    }
  }, [allFilters, onFilterChange]); // Rerun when filters or the callback changes

  // ---- MultiSelect Combobox Component ----
  interface MultiSelectComboboxProps {
    fieldKey: keyof typeof TASK_FIELD_CONFIG;
    options: string[];
    value: string[] | undefined;
    onChange: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean; // Add disabled prop
  }

  const MultiSelectCombobox: React.FC<MultiSelectComboboxProps> = (
    { fieldKey, options, value, onChange, placeholder = 'Select...', disabled = false }
  ) => {
    const [open, setOpen] = useState(false);
    const selectedValues = value || [];

    const handleSelect = (currentValue: string) => {
      const newSelectedValues = selectedValues.includes(currentValue)
        ? selectedValues.filter((v) => v !== currentValue)
        : [...selectedValues, currentValue];
      onChange(newSelectedValues);
      // Keep popover open for multi-select
      // setOpen(false);
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between h-10 text-sm font-normal", disabled && "opacity-50 cursor-not-allowed")}
            disabled={disabled}
          >
            <span className="truncate">
              {selectedValues.length === 0
                ? placeholder
                : selectedValues.length === 1
                ? selectedValues[0]
                : `${selectedValues.length} selected`
              }
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" suppressHydrationWarning={true} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
          <Command>
            <CommandInput placeholder={`Search ${TASK_FIELD_CONFIG[fieldKey]?.label}...`} />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={handleSelect}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues.includes(option) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  };
  // ---- End MultiSelect Combobox Component ----

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Filter Tasks</h2>
        <div className="ml-auto flex gap-2">
          <Dialog open={isAdvancedFiltersOpen} onOpenChange={setIsAdvancedFiltersOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" suppressHydrationWarning={true} />
                <span>Advanced Filters</span>
                {activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-1">{activeFilterCount}</Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Advanced Filters</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <AdvancedFilters 
                  initialFilters={allFilters} 
                  onChange={handleAdvancedFilterChange} 
                  onClose={() => setIsAdvancedFiltersOpen(false)}
                />
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="ghost" onClick={handleResetFilters} className="text-sm">
             <X className="mr-1 h-4 w-4" suppressHydrationWarning={true} />
             Reset {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
           </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Portfolio MultiSelect Filter */}
        <div className="flex-grow min-w-[200px]">
          <Label htmlFor="portfolio-filter" className="text-sm font-medium">Portfolio</Label>
          <MultiSelectCombobox
            fieldKey="portfolio"
            options={TASK_FIELD_CONFIG.portfolio?.options || []}
            value={allFilters.portfolio as string[] | undefined}
            onChange={(value) => handleFilterChange('portfolio', value)}
            placeholder="-- Any Portfolio --"
          />
        </div>

        {/* Project MultiSelect Filter */}
        <div className="flex-grow min-w-[200px]">
          <Label htmlFor="project-filter" className="text-sm font-medium">Project</Label>
          <MultiSelectCombobox
            fieldKey="project"
            options={getProjectOptions()} // Dynamic options
            value={allFilters.project as string[] | undefined}
            onChange={(value) => handleFilterChange('project', value)}
            placeholder="-- Any Project --"
            disabled={!allFilters.portfolio || (Array.isArray(allFilters.portfolio) && allFilters.portfolio.length === 0)} // Disable if no portfolio selected
          />
        </div>

        {/* Section MultiSelect Filter */}
        <div className="flex-grow min-w-[200px]">
          <Label htmlFor="section-filter" className="text-sm font-medium">Section</Label>
          <MultiSelectCombobox
            fieldKey="section"
            options={getSectionOptions()} // Dynamic options
            value={allFilters.section as string[] | undefined}
            onChange={(value) => handleFilterChange('section', value)}
            placeholder="-- Any Section --"
            disabled={!allFilters.project || (Array.isArray(allFilters.project) && allFilters.project.length === 0)} // Disable if no project selected
          />
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            value={allFilters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">-- All Priorities --</option>
            <option value="P0 - NOW">P0 - NOW</option>
            <option value="P1 - Critical">P1 - Critical</option>
            <option value="P2 - High">P2 - High</option>
            <option value="P3 - Medium">P3 - Medium</option>
            <option value="P4 - Low">P4 - Low</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={allFilters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">-- All Statuses --</option>
            <option value="1 - Nová (v Inboxe)">1 - Nová (v Inboxe)</option>
            <option value="2 - Čaká na Info / Rozhodnutie (Ja)">2 - Čaká na Info / Rozhodnutie (Ja)</option>
            <option value="3 - Pripravená pre AI">3 - Pripravená pre AI</option>
            <option value="4 - AI Agent Pracuje">4 - AI Agent Pracuje</option>
            <option value="5 - Vyžaduje Moju Akciu / Dokončenie">5 - Vyžaduje Moju Akciu / Dokončenie</option>
            <option value="6 - Hotovo">6 - Hotovo</option>
            <option value="7 - Zaparkované / Zrušené">7 - Zaparkované / Zrušené</option>
          </select>
        </div>
      </div>
      
      {/* Active filters summary */}
      {activeFilterCount > 0 && (
        <div className="mt-3 flex items-center">
          <span className="text-sm text-gray-600 mr-2">Active filters:</span>
          <Badge variant="outline">{activeFilterCount} active</Badge>
          <Button
            onClick={handleResetFilters}
            variant="ghost" 
            size="sm" 
            className="ml-2 h-auto py-0.5 px-1.5 text-xs"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}
