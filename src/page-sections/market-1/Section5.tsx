"use client";
import { FC } from "react";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import { ProductCard2 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Product from "@models/product.model";

// =======================================================
type Props = { newArrivalsList: Product[] };
// =======================================================

const Section5: FC<Props> = ({ newArrivalsList }) => {
  console.log("newArrivalsList",newArrivalsList)
  return (
    <CategorySectionCreator
      iconName="new-product-1"
      title="New Arrivals"
      seeMoreLink="#"
    >
      <Card p="1rem" borderRadius={8}>
        <Grid container spacing={6}>
          {newArrivalsList?.data.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2
                slug={item._id}
                title={item.name}
                price={12}
                imgUrl="/assets/images/products/apple-watch-0.png"
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </CategorySectionCreator>
  );
};

export default Section5;
