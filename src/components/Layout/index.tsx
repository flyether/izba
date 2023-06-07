import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import styles from './layout.module.css';
import { Outlet } from 'react-router-dom';
import { IError } from '../../store/storeInterfaces';
import { LoadingScreen } from '../atoms/loading';
import { ServerError } from '../atoms/ServerError/server-error';
import { AuthorizationUserAPI } from '../../store/services/UserService';
import { ProductsAPI } from '../../store/services/ProductsService';

const Layout = () => {
  const [trigger] = AuthorizationUserAPI.useLazyGetUserQuery();
  ProductsAPI.useGetAllProductsQuery({});
  const { token } = useAppSelector((state) => state.authorization);
  ProductsAPI.useLazyGetAllProductsQuery();
  const [rejectedEndpointName, setRejectedEndpointName] = useState<string | undefined>('undefined');
  const queries = useAppSelector((state) => state.api.queries);
  const mutations = useAppSelector((state) => state.api.mutations);
  const isSomeQueryPending = Object.values(queries).some((query) => query?.status === 'pending');

  const isSomeMutationPending = Object.values(mutations).some(
    (query) => query?.status === 'pending'
  );

  useEffect(() => {
    if (token) trigger();
  }, [token, trigger]);

  useEffect(() => {
    const rejectedQuery = Object.values(queries).find((query) => query?.status === 'rejected');

    if (rejectedQuery && rejectedQuery.endpointName) {
      if (rejectedQuery?.error?.message) {
        setRejectedEndpointName(rejectedQuery.error?.message);
      } else setRejectedEndpointName('ошибка квери');
    } else {
      setRejectedEndpointName(undefined);
    }
  }, [queries]);

  useEffect(() => {
    const rejectedMutation = Object.values(mutations).find(
      (mutation) => mutation?.status === 'rejected'
    );

    const serverError = rejectedMutation?.error as IError;
    if (rejectedMutation && rejectedMutation.endpointName) {
      // if (
      //   rejectedMutation.endpointName === 'regUser' ||
      //   rejectedMutation.endpointName === 'postDocs'
      // )
      //   return;
      if (serverError?.data?.message) {
        setRejectedEndpointName(serverError.data.message);
      } else setRejectedEndpointName('ошибка с сервера на мутацию');
    } else {
      setRejectedEndpointName(undefined);
    }
  }, [mutations]);

  return (
    <div className={styles.layout__wrapper}>
      {isSomeQueryPending && <LoadingScreen />}
      {isSomeMutationPending && <LoadingScreen />}
      {rejectedEndpointName && (
        <ServerError
          message={rejectedEndpointName}
          close={() => setRejectedEndpointName(undefined)}
        />
      )}
      <div className={styles.layout__container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
