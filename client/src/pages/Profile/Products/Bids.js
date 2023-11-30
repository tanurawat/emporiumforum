import React, { useEffect } from "react";
import moment from "moment";
import { Modal, message, Table } from "antd";
import { useDispatch } from "react-redux";
import Divider from "../../../components/Divider";
import { SetLoader } from "../../../redux/loadersSlice";
import { GetAllBids } from "../../../apicalls/products";

function Bids({ showBidModal, setShowBidModal, selectedProduct }) {
  const [bidsData, setBidsData] = React.useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetAllBids({
        product: selectedProduct._id,
      });
      dispatch(SetLoader(false));
      if (response.success) {
        setBidsData(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        return record.buyer.name;
      },
    },
    {
      title: "Bid Amount",
      dataIndex: "bidAmount",
    },
    {
      title: "Bid Date",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD-MM-YYYY hh:mm a");
      },
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Contact Details",
      dataIndex: "contactDetails",
      render: (text, record) => {
        return (
          <div>
            <p>Phone: {record.mobile}</p>
            <p>Email: {record.buyer.email}</p>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (selectedProduct) {
      getData();
    }
  }, [selectedProduct]);
  return (
    <Modal
      title=""
      open={showBidModal}
      onCancel={() => setShowBidModal(false)}
      centered
      width={1200}
      footer={null}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-xl text-primary text-center">Bids</h1>
        <Divider />
        <p className="text-xl text-sky-800 mb-2">
          Product Name: {selectedProduct.name}
        </p>
        <Table columns={columns} dataSource={bidsData}></Table>
      </div>
    </Modal>
  );
}
export default Bids;
