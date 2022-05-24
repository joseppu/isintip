
import { MouseEventHandler, useMemo } from "react";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import pluralize from "pluralize";
import Link from "next/link";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function PageButton({ children, className, ...rest }: PageButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 disabled:text-gray-300 hover:text-gray-600 disabled:hover:text-gray-300 hover:bg-gray-100 disabled:hover:bg-inherit",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

type PageButtonProps = {
  children: React.ReactNode;
  className?: string | any;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

type Props = {
  dataProp: any[];
  columnNames?: string[];
  modelName: string;
};


const Table = ({ dataProp, columnNames, modelName }: Props) => {
  const pluralModelName = pluralize(modelName); //For header
  const pluralModelNameLowercase = pluralModelName.toLowerCase(); //For link and description text
  const data = useMemo(() => [...dataProp], [dataProp]);
  const columns = useMemo(() => {
    if (!data.length) {
      return [];
    } else if (columnNames?.length) {
      return columnNames.map((name) => ({
        Header: name.charAt(0).toUpperCase() + name.slice(1),
        accessor: name,
      }));
    } else {
      return Object.keys(data[0]).map((key) => {
        return {
          Header: key,
          accessor: key,
        };
      });
    }
  }, [data, columnNames]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState: { pageSize: 50 } }, useGlobalFilter, useSortBy, usePagination);

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setGlobalFilter(value);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            {pluralModelName}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the {pluralModelNameLowercase} in our registry
            including their
            {" " +
              columnNames
                ?.map((i) => i)
                .slice(1)
                .join(", ")
                .replace(/,(?!.*,)/, " and") +
              "."}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href={`/${pluralModelNameLowercase}/create`} passHref>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add {modelName}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:py-5">
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                onChange={handleFilterInputChange}
                id="search"
                placeholder="Search..."
                className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                {...getTableProps()}
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={headerGroup.id}
                    >
                      {headerGroup.headers.map((column, columnIdx) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          key={column.id}
                        >
                          {columnIdx !== headerGroup.headers.length - 1
                            ? column.render("Header")
                            : null}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ↑"
                                : " ↓"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white" {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);

                    return (
                      <tr {...row.getRowProps()} key={row.id}>
                        {row.cells.map((cell, cellIdx) => (
                          <td
                            className={classNames(
                              "border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                            key={cell.value}
                          >
                            {cellIdx !== row.cells.length - 1 ? (
                              cell.render("Cell")
                            ) : (
                              <Link
                                href={`/${pluralModelNameLowercase}/${cell.value}`}
                                passHref
                              >
                                <a className="text-indigo-600 hover:text-indigo-900">
                                  Edit
                                </a>
                              </Link>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 mt-3 pagination sm:px-0">
        <div className="flex items-center">
          <span>
            Page{" "}
            <strong className="text-gray-800">
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>

          <select
            className="block mt-1 ml-3 border-gray-300 rounded-md shadow-sm min-w-fit focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <nav
          className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <PageButton
            className="rounded-l-md"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <span className="sr-only">First</span>
            <ChevronDoubleLeftIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
          <PageButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
          <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
          <PageButton
            className="rounded-r-md"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <span className="sr-only">Last</span>
            <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
        </nav>
      </div>
    </div>
  );
};

export default Table;
