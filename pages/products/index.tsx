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

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);

  const isinCount = await prisma.isinData.count()
  console.log(isinCount)
  const isinData = await prisma.isinData.findMany();
  return { props: { isinData: JSON.parse(JSON.stringify(isinData)) } };
};

export default IsinList;
