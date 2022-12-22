import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Banner,
  Card,
  EmptyState,
  Icon,
  Layout,
  Page,
  ResourceList,
  SkeletonBodyText,
  Tabs,
} from "@shopify/polaris";

import {
  LockMajor
} from '@shopify/polaris-icons';
import { useCallback, useState } from "react";
import ResourceListWithFilter from "../components/ResourceListWithFilter";

export default function HomePage() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0)

  const handleTabChange = useCallback((tabIndex) => setSelected(tabIndex), [])

  const handleClick = () => {
    console.log("Clicked")
  }

  const handleClickBanner = () => {
    console.log("ClickedBanner")
  }

  const LockIcon = () => <Icon source={LockMajor} color="base" />

  const tabs = [{ id: 1, title: "All", content: "All" }]

  return (
    <Page
      title="My Shopify App"
      primaryAction={{ content: "Add page", onAction: handleClick }}
    >
      <Layout>
        <Layout.Section>
          <Banner
            status="info"
            icon={LockIcon}
            title="Store access is restricted"
            action={{ content: "See store password", onAction: handleClickBanner }}
          >
            <p>While your online store is in development, only visitors with the password can access it.</p>

          </Banner>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              <ResourceListWithFilter />
            </Tabs>

          </Card>
        </Layout.Section>
      </Layout>


    </Page>
  );
}
