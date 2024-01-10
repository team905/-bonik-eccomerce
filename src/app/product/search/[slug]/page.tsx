import Box from "@component/Box";
import SearchResult from "@component/search/SearchResult";

const ProductSearchResult = () => {
  return (
    <Box pt="20px">
      <SearchResult sortOptions={sortOptions} />
    </Box>
  );
};

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" },
];

export default ProductSearchResult;
