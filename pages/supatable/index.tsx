import { supabase } from "../../utils/supabase";
import { GetServerSideProps } from "next";
import EditedTable from "../../components/EditedTable";

export const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

export async function getServerSideProps({ query: { page = 0 } }) {
  const { from, to } = getPagination(page, 50);

  const { data, error, count } = await supabase
    .from("isin_data_without_categories")
    .select("*", { count: "exact" })
    .order("catalog_number", { ascending: true })
    .range(from, to);

  let totalPage = Math.ceil(count / 50);

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      data,
      count: count,
      page: +page,
      totalPage,
    },
  };
}

export default function Home({ data, count, page, totalPage }) {
  return (
    <EditedTable
      dataProp={data}
      totalPage={totalPage}
      currentPage={page}
      columnNames={["catalog_number", "product_name", "amount", "fts"]}
    />
  );
}
