import ItemCard from "./ItemCard";

import { getApi_data } from "../service/Api";

import useGetData from "../utlis/hooks/useGetData";
import ShimmerItemCard from "../utlis/ShimmerItemCard";

function Body() {
  let get_api_data_custom_hook = useGetData(getApi_data);
  console.log("wht is get api get custom hook", get_api_data_custom_hook.data);

  const { data } = get_api_data_custom_hook;

  if (data.length === 0) return <ShimmerItemCard></ShimmerItemCard>;

  if (data.length > 0) {
    return (
      <>
        <div className="container py-5">
          <div className="row">
            {data.map(function (item, index, arr) {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 col-12"
                  key={item.id}
                >
                  <ItemCard item_data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Body;
