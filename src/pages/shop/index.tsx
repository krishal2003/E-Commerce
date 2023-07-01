import { Container } from "@mui/material";
import React from "react";
import DashboardLayout from "src/layouts/dashboard";
import ShopLayout from "src/layouts/main/ShopLayout";


Shop.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;


function Shop() {
    
  return (
    <Container>
      <ShopLayout/>
    </Container>
  );
}

export default Shop;
