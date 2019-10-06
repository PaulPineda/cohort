import { useRouter } from "next/router";

import Cohort from "../../src/components/Cohort";

const User = () => {
  const { query } = useRouter();
  const { userId } = query;

  return <Cohort userId={userId} />;
};

export default User;
