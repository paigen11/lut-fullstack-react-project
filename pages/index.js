import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Layout from '../components/Layout';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import styles from '../styles/Home.module.css';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div />;

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Level Up Your Life</h1>
          <div className={styles.list}>
            <HabitForm />
            <HabitList />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default withApollo(Home);
