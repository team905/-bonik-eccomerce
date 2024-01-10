import axios from "axios";
import { Fragment } from "react";
import Hidden from "@component/hidden";
import TableRow from "@component/TableRow";
import { H5 } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import OrderList from "@component/vendor/orders/OrderList";

const Orders = async () => {
  const { data } = await axios.get("/api/admin/orders");

  return (
    <Fragment>
      <DashboardPageHeader title="Orders" iconName="bag_filled" />

      <Hidden down={769}>
        <TableRow
          padding="0px 18px"
          boxShadow="none"
          backgroundColor="transparent"
        >
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Order #
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Status
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Date purchased
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Total
          </H5>

          <H5 flex="0 0 0 !important" color="text.muted" px="22px" my="0px" />
        </TableRow>
      </Hidden>

      <OrderList orders={data} />
    </Fragment>
  );
};

export default Orders;
