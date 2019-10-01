import { useRouter } from "next/router";

const Cohort = () => {
  const { query } = useRouter();
  const { userId } = query;

  return <p>{userId}</p>;
};

export default Cohort;
