import { MouseEventHandler, useMemo, useRef } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function PageButton({ children, className, ...rest }: PageButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-violet-300 bg-white text-sm font-medium text-violet-500 disabled:text-violet-300 hover:text-violet-600 disabled:hover:text-violet-300 hover:bg-violet-100 disabled:hover:bg-inherit",
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

const SearchTable = ({
  dataProp,
  columnNames,
  modelName,
  currentPage,
  totalPage,
  search,
}: Props) => {
  const data = useMemo(() => [...dataProp], [dataProp]);
  const columns = useMemo(() => {
    if (!data.length) {
      return [];
    } else if (columnNames?.length) {
      return columnNames.map((name) => ({
        Header: name.header,
        accessor: name.accessor,
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
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: currentPage, pageSize: 50 },
      manualPagination: true,
      pageCount: totalPage,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const { value } = e.currentTarget;
      router.push(`/products?page=0&search=${value}`);
    }
  };
  const productSearchRef = useRef("");
  const handleClick = () => {
    const { value } = productSearchRef.current;
    if (value === "") {
      return;
    } else {
      router.push(`/products?page=0&search=${value}`);
    }
  };

  return (
    <div className="max-w-5xl px-4 pt-4 mx-auto my-4 sm:px-6 lg:px-8 ">
      <div className="sm:flex sm:items-center">
        <div className="flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Product List
          </h1>
          <p className="mt-2 text-gray-700 text-md">
            Search through our wide range of laboratory supplies, lab chemicals,
            antibodies, gene silencers. <br /> Unsurpassed quality provided by
            Santa Cruz Biotechnology (SCBT).
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="">
            <div className="flex items-center flex-1 ml-4 lg:ml-8 ">
              <div className="w-full max-w-2xl">
                <label htmlFor="heroProductSearch" className="sr-only">
                  Search
                </label>
                <div className="flex items-center ">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <SearchIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      ref={productSearchRef}
                      id="productSearch"
                      name="productSearch"
                      className="block w-full py-2 pl-10 pr-5 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 "
                      placeholder="Search"
                      type="search"
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    className="inline-flex px-6 py-2 ml-1 text-white border-0 rounded bg-violet-600 focus:outline-none hover:bg-violet-700"
                  >
                    Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block min-w-full pt-4 pb-2 align-middle">
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
                          className="sticky top-0 z-10 border-b border-violet-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          key={column.id}
                        >
                          {column.render("Header")}
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
                              "border-b border-violet-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                            key={cell.value}
                          >
                            {cell.render("Cell")}
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
            <strong className="text-gray-700">
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>

        <nav
          className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <PageButton
            className="rounded-l-md"
            onClick={() => router.push(`/products?page=${0}&search=${search}`)}
            disabled={currentPage === 0}
          >
            <span className="sr-only">First</span>
            <ChevronDoubleLeftIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
          <PageButton
            onClick={() =>
              router.push(`/products?page=${currentPage - 1}&search=${search}`)
            }
            disabled={currentPage === 0}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
          <PageButton
            onClick={() =>
              router.push(`/products?page=${currentPage + 1}&search=${search}`)
            }
            disabled={currentPage === totalPage - 1}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
          <PageButton
            className="rounded-r-md"
            onClick={() =>
              router.push(`/products?page=${totalPage - 1}&search=${search}`)
            }
            disabled={currentPage === totalPage - 1}
          >
            <span className="sr-only">Last</span>
            <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
          </PageButton>
        </nav>
      </div>
    </div>
  );
};

export default SearchTable;
