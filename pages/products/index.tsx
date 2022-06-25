import { supabase } from "../../utils/supabase";
import { GetServerSideProps } from "next";
import SearchTable from "../../components/SearchTable";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

export async function getServerSideProps({ query: { page = 0, search = "" } }) {
  if (search === "") {
    const { from, to } = getPagination(page, 50);
    const { data, error, count } = await supabase
      .from("isin_data_without_categories")
      .select("catalog_number, product_name, amount", { count: "exact" })
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
        search,
      },
    };
  } else {
    const { from, to } = getPagination(page, 50);
    const { data, error, count } = await supabase
      .from("isin_data_without_categories")
      .select("catalog_number, product_name, amount", { count: "exact" })
      .textSearch("fts", search)
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
        search,
      },
    };
  }
}

export default function Home({ data, count, page, totalPage, search }) {
  return (
    <div>
      {" "}
      <Navbar />
      <SearchTable
        dataProp={data}
        totalPage={totalPage}
        currentPage={page}
        search={search}
        columnNames={[
          { header: "Catalog Number", accessor: "catalog_number" },
          { header: "Product Name", accessor: "product_name" },
          { header: "Amount", accessor: "amount" },
        ]}
      />
      <Footer />
    </div>
  );
}
