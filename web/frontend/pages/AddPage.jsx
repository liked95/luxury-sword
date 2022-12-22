import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Banner,
  Card,
  Icon,
  Layout,
  Page,

} from "@shopify/polaris";


import { useCallback, useState } from "react";


export default function AddPage() {
  const navigate = useNavigate();






  return (
    <Page
      breadcrumbs={[{ content: 'Admin panel', url: '/' }]}
      title="Add page"
    >
      <form >
        <Layout>

        </Layout>

      </form>

    </Page>
  );
}
