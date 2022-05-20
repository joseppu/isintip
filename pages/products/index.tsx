
import { isinData } from "@prisma/client";
import { GetServerSideProps } from "next";
import Table from "../../components/Table";
import prisma from "../../lib/prismaClient";

type Props = {
    isinData: isinData[];
  };
  

const IsinList = ({ isinData }: Props) => {
  return (
    <Table
      modelName="isinData"
      dataProp={isinData}
      columnNames={["CatalogNumber", "ProductName", "Amount", "SQCategory"]}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const isinData = await prisma.isinData.findMany();

  return { props: { isinData: JSON.parse(JSON.stringify(isinData)) } };
};

export default IsinList;
