import React, { useId } from "react";

function RadioButton({ options = [], ...props }, ref) {
  return (
    
    <div className="mb-2">
      <h3 className="mb-2 text-sm text-gray-900 dark:text-white">User Type</h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((value) => (
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={value}>
            <div className="flex items-center ps-3">
              <input
                id={value}
                type="radio"
                value={value}
                ref={ref}
                name="list-radio"
                {...props}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={value}
                className="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {value}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.forwardRef(RadioButton);
