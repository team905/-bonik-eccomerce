import { Fragment } from "react";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import ShopCard1 from "@sections/shop/ShopCard1";
import { H2, SemiSpan } from "@component/Typography";
import api from "@utils/__api__/shops";
import { string } from "yup";

const ShopList = async ({ params }: { params: { slug: string } }) => {
    
  const shopList = await api.getShopList(params.slug);

  return (

    <Fragment>
      <H2 mb="24px">All Shops  </H2>
      {typeof(shopList) != "string" ?
      <Grid container spacing={6}>
        {shopList?.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ShopCard1
              name={item.name}
              phone={item.phone}
              address={item.distance}
              rating={item.rating || 5}
              imgUrl={item.profilePicture}
              coverImgUrl={item.coverPicture}
              shopUrl={`/shops/${item._id}`}
            />
          </Grid>
        ))}
      </Grid>
      :
      <H2 mb="24px">{shopList} </H2>

        }

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt="32px"
      >
        <SemiSpan>Showing 1-9 of {shopList.length} Shops</SemiSpan>
        <Pagination pageCount={Math.ceil(shopList.length / 9)} />
      </FlexBox>
    </Fragment>
  );
};

export default ShopList;
