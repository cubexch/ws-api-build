"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = exports.Bootstrap_Which = exports.Done = exports.RestingOrder = exports.Credentials = exports.OrderResponse = exports.OrderResponse_Which = exports.Fill = exports.ModifyOrderReject = exports.ModifyOrderRejectReason = exports.CancelOrderReject = exports.CancelOrderRejectReason = exports.NewOrderReject = exports.NewOrderRejectReason = exports.ModifyOrderAck = exports.CancelOrderAck = exports.NewOrderAck = exports.OrderRequest = exports.OrderRequest_Which = exports.Heartbeat = exports.ModifyOrder = exports.CancelOrder = exports.NewOrder = exports.OrderType = exports.TimeInForce = exports.Side = exports._capnpFileId = void 0;
const capnp_ts_1 = require("capnp-ts");
exports._capnpFileId = BigInt("0xe73a49dd00d3405e");
var Side;
(function (Side) {
    Side[Side["BID"] = 0] = "BID";
    Side[Side["ASK"] = 1] = "ASK";
})(Side = exports.Side || (exports.Side = {}));
var TimeInForce;
(function (TimeInForce) {
    TimeInForce[TimeInForce["IMMEDIATE_OR_CANCEL"] = 0] = "IMMEDIATE_OR_CANCEL";
    TimeInForce[TimeInForce["GOOD_FOR_SESSION"] = 1] = "GOOD_FOR_SESSION";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["LIMIT"] = 0] = "LIMIT";
    OrderType[OrderType["MARKET_LIMIT"] = 1] = "MARKET_LIMIT";
    OrderType[OrderType["MARKET_WITH_PROTECTION"] = 2] = "MARKET_WITH_PROTECTION";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
class NewOrder extends capnp_ts_1.Struct {
    getOrderId() { return capnp_ts_1.Struct.getUint64(0, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getMarketId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setMarketId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getPrice() { return capnp_ts_1.Struct.getUint64(24, this); }
    setPrice(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getQuantity() { return capnp_ts_1.Struct.getUint64(32, this); }
    setQuantity(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getSide() { return capnp_ts_1.Struct.getUint16(40, this); }
    setSide(value) { capnp_ts_1.Struct.setUint16(40, value, this); }
    getTimeInForce() { return capnp_ts_1.Struct.getUint16(42, this); }
    setTimeInForce(value) { capnp_ts_1.Struct.setUint16(42, value, this); }
    getOrderType() { return capnp_ts_1.Struct.getUint16(44, this); }
    setOrderType(value) { capnp_ts_1.Struct.setUint16(44, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(48, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(48, value, this); }
    toString() { return "NewOrder_" + super.toString(); }
}
exports.NewOrder = NewOrder;
NewOrder._capnp = { displayName: "NewOrder", id: "85d7d0f8a28d1271", size: new capnp_ts_1.ObjectSize(56, 0) };
class CancelOrder extends capnp_ts_1.Struct {
    getMarketId() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMarketId(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(24, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    toString() { return "CancelOrder_" + super.toString(); }
}
exports.CancelOrder = CancelOrder;
CancelOrder._capnp = { displayName: "CancelOrder", id: "fdec5602767ebbff", size: new capnp_ts_1.ObjectSize(32, 0) };
class ModifyOrder extends capnp_ts_1.Struct {
    getMarketId() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMarketId(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getNewQuantity() { return capnp_ts_1.Struct.getUint64(24, this); }
    setNewQuantity(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(32, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    toString() { return "ModifyOrder_" + super.toString(); }
}
exports.ModifyOrder = ModifyOrder;
ModifyOrder._capnp = { displayName: "ModifyOrder", id: "8c38f8d77a0d6c77", size: new capnp_ts_1.ObjectSize(40, 0) };
class Heartbeat extends capnp_ts_1.Struct {
    getRequestId() { return capnp_ts_1.Struct.getUint64(0, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getTimestamp() { return capnp_ts_1.Struct.getUint64(8, this); }
    setTimestamp(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    toString() { return "Heartbeat_" + super.toString(); }
}
exports.Heartbeat = Heartbeat;
Heartbeat._capnp = { displayName: "Heartbeat", id: "bd63fc242e4ee103", size: new capnp_ts_1.ObjectSize(16, 0) };
var OrderRequest_Which;
(function (OrderRequest_Which) {
    OrderRequest_Which[OrderRequest_Which["NEW"] = 0] = "NEW";
    OrderRequest_Which[OrderRequest_Which["CANCEL"] = 1] = "CANCEL";
    OrderRequest_Which[OrderRequest_Which["MODIFY"] = 2] = "MODIFY";
    OrderRequest_Which[OrderRequest_Which["HEARTBEAT"] = 3] = "HEARTBEAT";
})(OrderRequest_Which = exports.OrderRequest_Which || (exports.OrderRequest_Which = {}));
class OrderRequest extends capnp_ts_1.Struct {
    adoptNew(value) {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownNew() { return capnp_ts_1.Struct.disown(this.getNew()); }
    getNew() {
        capnp_ts_1.Struct.testWhich("new", capnp_ts_1.Struct.getUint16(0, this), 0, this);
        return capnp_ts_1.Struct.getStruct(0, NewOrder, this);
    }
    hasNew() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initNew() {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        return capnp_ts_1.Struct.initStructAt(0, NewOrder, this);
    }
    isNew() { return capnp_ts_1.Struct.getUint16(0, this) === 0; }
    setNew(value) {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptCancel(value) {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownCancel() { return capnp_ts_1.Struct.disown(this.getCancel()); }
    getCancel() {
        capnp_ts_1.Struct.testWhich("cancel", capnp_ts_1.Struct.getUint16(0, this), 1, this);
        return capnp_ts_1.Struct.getStruct(0, CancelOrder, this);
    }
    hasCancel() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initCancel() {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        return capnp_ts_1.Struct.initStructAt(0, CancelOrder, this);
    }
    isCancel() { return capnp_ts_1.Struct.getUint16(0, this) === 1; }
    setCancel(value) {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptModify(value) {
        capnp_ts_1.Struct.setUint16(0, 2, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownModify() { return capnp_ts_1.Struct.disown(this.getModify()); }
    getModify() {
        capnp_ts_1.Struct.testWhich("modify", capnp_ts_1.Struct.getUint16(0, this), 2, this);
        return capnp_ts_1.Struct.getStruct(0, ModifyOrder, this);
    }
    hasModify() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initModify() {
        capnp_ts_1.Struct.setUint16(0, 2, this);
        return capnp_ts_1.Struct.initStructAt(0, ModifyOrder, this);
    }
    isModify() { return capnp_ts_1.Struct.getUint16(0, this) === 2; }
    setModify(value) {
        capnp_ts_1.Struct.setUint16(0, 2, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptHeartbeat(value) {
        capnp_ts_1.Struct.setUint16(0, 3, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownHeartbeat() { return capnp_ts_1.Struct.disown(this.getHeartbeat()); }
    getHeartbeat() {
        capnp_ts_1.Struct.testWhich("heartbeat", capnp_ts_1.Struct.getUint16(0, this), 3, this);
        return capnp_ts_1.Struct.getStruct(0, Heartbeat, this);
    }
    hasHeartbeat() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initHeartbeat() {
        capnp_ts_1.Struct.setUint16(0, 3, this);
        return capnp_ts_1.Struct.initStructAt(0, Heartbeat, this);
    }
    isHeartbeat() { return capnp_ts_1.Struct.getUint16(0, this) === 3; }
    setHeartbeat(value) {
        capnp_ts_1.Struct.setUint16(0, 3, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    toString() { return "OrderRequest_" + super.toString(); }
    which() { return capnp_ts_1.Struct.getUint16(0, this); }
}
exports.OrderRequest = OrderRequest;
OrderRequest.NEW = OrderRequest_Which.NEW;
OrderRequest.CANCEL = OrderRequest_Which.CANCEL;
OrderRequest.MODIFY = OrderRequest_Which.MODIFY;
OrderRequest.HEARTBEAT = OrderRequest_Which.HEARTBEAT;
OrderRequest._capnp = { displayName: "OrderRequest", id: "efb0ef9605e80e29", size: new capnp_ts_1.ObjectSize(8, 1) };
class NewOrderAck extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getExchangeOrderId() { return capnp_ts_1.Struct.getUint64(24, this); }
    setExchangeOrderId(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getMarketId() { return capnp_ts_1.Struct.getUint64(32, this); }
    setMarketId(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getPrice() { return capnp_ts_1.Struct.getUint64(40, this); }
    setPrice(value) { capnp_ts_1.Struct.setUint64(40, value, this); }
    getQuantity() { return capnp_ts_1.Struct.getUint64(48, this); }
    setQuantity(value) { capnp_ts_1.Struct.setUint64(48, value, this); }
    getSide() { return capnp_ts_1.Struct.getUint16(56, this); }
    setSide(value) { capnp_ts_1.Struct.setUint16(56, value, this); }
    getTimeInForce() { return capnp_ts_1.Struct.getUint16(58, this); }
    setTimeInForce(value) { capnp_ts_1.Struct.setUint16(58, value, this); }
    getOrderType() { return capnp_ts_1.Struct.getUint16(60, this); }
    setOrderType(value) { capnp_ts_1.Struct.setUint16(60, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(64, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(64, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(72, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(72, value, this); }
    toString() { return "NewOrderAck_" + super.toString(); }
}
exports.NewOrderAck = NewOrderAck;
NewOrderAck._capnp = { displayName: "NewOrderAck", id: "f67efcff042bbcd7", size: new capnp_ts_1.ObjectSize(80, 0) };
class CancelOrderAck extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(24, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(32, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    toString() { return "CancelOrderAck_" + super.toString(); }
}
exports.CancelOrderAck = CancelOrderAck;
CancelOrderAck._capnp = { displayName: "CancelOrderAck", id: "8327030fcf898076", size: new capnp_ts_1.ObjectSize(40, 0) };
class ModifyOrderAck extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(24, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getNewQuantity() { return capnp_ts_1.Struct.getUint64(32, this); }
    setNewQuantity(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(40, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(40, value, this); }
    toString() { return "ModifyOrderAck_" + super.toString(); }
}
exports.ModifyOrderAck = ModifyOrderAck;
ModifyOrderAck._capnp = { displayName: "ModifyOrderAck", id: "90b9bb3bfe781055", size: new capnp_ts_1.ObjectSize(48, 0) };
var NewOrderRejectReason;
(function (NewOrderRejectReason) {
    NewOrderRejectReason[NewOrderRejectReason["UNKNOWN"] = 0] = "UNKNOWN";
    NewOrderRejectReason[NewOrderRejectReason["INVALID_QUANTITY"] = 1] = "INVALID_QUANTITY";
    NewOrderRejectReason[NewOrderRejectReason["INVALID_MARKET_ID"] = 2] = "INVALID_MARKET_ID";
    NewOrderRejectReason[NewOrderRejectReason["DUPLICATE_ORDER_ID"] = 3] = "DUPLICATE_ORDER_ID";
    NewOrderRejectReason[NewOrderRejectReason["INVALID_SIDE"] = 4] = "INVALID_SIDE";
    NewOrderRejectReason[NewOrderRejectReason["INVALID_TIME_IN_FORCE"] = 5] = "INVALID_TIME_IN_FORCE";
    NewOrderRejectReason[NewOrderRejectReason["INVALID_ORDER_TYPE"] = 6] = "INVALID_ORDER_TYPE";
    NewOrderRejectReason[NewOrderRejectReason["INVALID_SELF_TRADE_PREVENTION"] = 7] = "INVALID_SELF_TRADE_PREVENTION";
    NewOrderRejectReason[NewOrderRejectReason["UNKNOWN_TRADER"] = 8] = "UNKNOWN_TRADER";
    NewOrderRejectReason[NewOrderRejectReason["PRICE_WITH_MARKET_ORDER"] = 9] = "PRICE_WITH_MARKET_ORDER";
    NewOrderRejectReason[NewOrderRejectReason["EXCEEDED_SPOT_POSITION"] = 10] = "EXCEEDED_SPOT_POSITION";
})(NewOrderRejectReason = exports.NewOrderRejectReason || (exports.NewOrderRejectReason = {}));
class NewOrderReject extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(24, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(32, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getReason() { return capnp_ts_1.Struct.getUint16(40, this); }
    setReason(value) { capnp_ts_1.Struct.setUint16(40, value, this); }
    toString() { return "NewOrderReject_" + super.toString(); }
}
exports.NewOrderReject = NewOrderReject;
NewOrderReject._capnp = { displayName: "NewOrderReject", id: "f65543608c6c19f2", size: new capnp_ts_1.ObjectSize(48, 0) };
var CancelOrderRejectReason;
(function (CancelOrderRejectReason) {
    CancelOrderRejectReason[CancelOrderRejectReason["UNKNOWN"] = 0] = "UNKNOWN";
    CancelOrderRejectReason[CancelOrderRejectReason["INVALID_MARKET_ID"] = 1] = "INVALID_MARKET_ID";
    CancelOrderRejectReason[CancelOrderRejectReason["ORDER_NOT_FOUND"] = 2] = "ORDER_NOT_FOUND";
})(CancelOrderRejectReason = exports.CancelOrderRejectReason || (exports.CancelOrderRejectReason = {}));
class CancelOrderReject extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(24, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(32, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getReason() { return capnp_ts_1.Struct.getUint16(40, this); }
    setReason(value) { capnp_ts_1.Struct.setUint16(40, value, this); }
    toString() { return "CancelOrderReject_" + super.toString(); }
}
exports.CancelOrderReject = CancelOrderReject;
CancelOrderReject._capnp = { displayName: "CancelOrderReject", id: "c6f5791f84d0efda", size: new capnp_ts_1.ObjectSize(48, 0) };
var ModifyOrderRejectReason;
(function (ModifyOrderRejectReason) {
    ModifyOrderRejectReason[ModifyOrderRejectReason["UNKNOWN"] = 0] = "UNKNOWN";
    ModifyOrderRejectReason[ModifyOrderRejectReason["INVALID_QUANTITY"] = 1] = "INVALID_QUANTITY";
    ModifyOrderRejectReason[ModifyOrderRejectReason["INVALID_MARKET_ID"] = 2] = "INVALID_MARKET_ID";
    ModifyOrderRejectReason[ModifyOrderRejectReason["ORDER_NOT_FOUND"] = 3] = "ORDER_NOT_FOUND";
    ModifyOrderRejectReason[ModifyOrderRejectReason["INVALID_IFM"] = 4] = "INVALID_IFM";
    ModifyOrderRejectReason[ModifyOrderRejectReason["UNKNOWN_TRADER"] = 5] = "UNKNOWN_TRADER";
    ModifyOrderRejectReason[ModifyOrderRejectReason["EXCEEDED_SPOT_POSITION"] = 6] = "EXCEEDED_SPOT_POSITION";
})(ModifyOrderRejectReason = exports.ModifyOrderRejectReason || (exports.ModifyOrderRejectReason = {}));
class ModifyOrderReject extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getRequestId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setRequestId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(24, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(32, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getReason() { return capnp_ts_1.Struct.getUint16(40, this); }
    setReason(value) { capnp_ts_1.Struct.setUint16(40, value, this); }
    toString() { return "ModifyOrderReject_" + super.toString(); }
}
exports.ModifyOrderReject = ModifyOrderReject;
ModifyOrderReject._capnp = { displayName: "ModifyOrderReject", id: "a86271ba9af3e26c", size: new capnp_ts_1.ObjectSize(48, 0) };
class Fill extends capnp_ts_1.Struct {
    getMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getMarketId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setMarketId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getOrderId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getExchangeOrderId() { return capnp_ts_1.Struct.getUint64(24, this); }
    setExchangeOrderId(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getFillPrice() { return capnp_ts_1.Struct.getUint64(32, this); }
    setFillPrice(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getFillQuantity() { return capnp_ts_1.Struct.getUint64(40, this); }
    setFillQuantity(value) { capnp_ts_1.Struct.setUint64(40, value, this); }
    getLeavesQuantity() { return capnp_ts_1.Struct.getUint64(48, this); }
    setLeavesQuantity(value) { capnp_ts_1.Struct.setUint64(48, value, this); }
    getTransactTime() { return capnp_ts_1.Struct.getUint64(56, this); }
    setTransactTime(value) { capnp_ts_1.Struct.setUint64(56, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(64, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(64, value, this); }
    toString() { return "Fill_" + super.toString(); }
}
exports.Fill = Fill;
Fill._capnp = { displayName: "Fill", id: "881861559485b382", size: new capnp_ts_1.ObjectSize(72, 0) };
var OrderResponse_Which;
(function (OrderResponse_Which) {
    OrderResponse_Which[OrderResponse_Which["NEW_ACK"] = 0] = "NEW_ACK";
    OrderResponse_Which[OrderResponse_Which["CANCEL_ACK"] = 1] = "CANCEL_ACK";
    OrderResponse_Which[OrderResponse_Which["MODIFY_ACK"] = 2] = "MODIFY_ACK";
    OrderResponse_Which[OrderResponse_Which["NEW_REJECT"] = 3] = "NEW_REJECT";
    OrderResponse_Which[OrderResponse_Which["CANCEL_REJECT"] = 4] = "CANCEL_REJECT";
    OrderResponse_Which[OrderResponse_Which["MODIFY_REJECT"] = 5] = "MODIFY_REJECT";
    OrderResponse_Which[OrderResponse_Which["FILL"] = 6] = "FILL";
    OrderResponse_Which[OrderResponse_Which["HEARTBEAT"] = 7] = "HEARTBEAT";
})(OrderResponse_Which = exports.OrderResponse_Which || (exports.OrderResponse_Which = {}));
class OrderResponse extends capnp_ts_1.Struct {
    adoptNewAck(value) {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownNewAck() { return capnp_ts_1.Struct.disown(this.getNewAck()); }
    getNewAck() {
        capnp_ts_1.Struct.testWhich("newAck", capnp_ts_1.Struct.getUint16(0, this), 0, this);
        return capnp_ts_1.Struct.getStruct(0, NewOrderAck, this);
    }
    hasNewAck() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initNewAck() {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        return capnp_ts_1.Struct.initStructAt(0, NewOrderAck, this);
    }
    isNewAck() { return capnp_ts_1.Struct.getUint16(0, this) === 0; }
    setNewAck(value) {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptCancelAck(value) {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownCancelAck() { return capnp_ts_1.Struct.disown(this.getCancelAck()); }
    getCancelAck() {
        capnp_ts_1.Struct.testWhich("cancelAck", capnp_ts_1.Struct.getUint16(0, this), 1, this);
        return capnp_ts_1.Struct.getStruct(0, CancelOrderAck, this);
    }
    hasCancelAck() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initCancelAck() {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        return capnp_ts_1.Struct.initStructAt(0, CancelOrderAck, this);
    }
    isCancelAck() { return capnp_ts_1.Struct.getUint16(0, this) === 1; }
    setCancelAck(value) {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptModifyAck(value) {
        capnp_ts_1.Struct.setUint16(0, 2, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownModifyAck() { return capnp_ts_1.Struct.disown(this.getModifyAck()); }
    getModifyAck() {
        capnp_ts_1.Struct.testWhich("modifyAck", capnp_ts_1.Struct.getUint16(0, this), 2, this);
        return capnp_ts_1.Struct.getStruct(0, ModifyOrderAck, this);
    }
    hasModifyAck() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initModifyAck() {
        capnp_ts_1.Struct.setUint16(0, 2, this);
        return capnp_ts_1.Struct.initStructAt(0, ModifyOrderAck, this);
    }
    isModifyAck() { return capnp_ts_1.Struct.getUint16(0, this) === 2; }
    setModifyAck(value) {
        capnp_ts_1.Struct.setUint16(0, 2, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptNewReject(value) {
        capnp_ts_1.Struct.setUint16(0, 3, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownNewReject() { return capnp_ts_1.Struct.disown(this.getNewReject()); }
    getNewReject() {
        capnp_ts_1.Struct.testWhich("newReject", capnp_ts_1.Struct.getUint16(0, this), 3, this);
        return capnp_ts_1.Struct.getStruct(0, NewOrderReject, this);
    }
    hasNewReject() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initNewReject() {
        capnp_ts_1.Struct.setUint16(0, 3, this);
        return capnp_ts_1.Struct.initStructAt(0, NewOrderReject, this);
    }
    isNewReject() { return capnp_ts_1.Struct.getUint16(0, this) === 3; }
    setNewReject(value) {
        capnp_ts_1.Struct.setUint16(0, 3, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptCancelReject(value) {
        capnp_ts_1.Struct.setUint16(0, 4, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownCancelReject() { return capnp_ts_1.Struct.disown(this.getCancelReject()); }
    getCancelReject() {
        capnp_ts_1.Struct.testWhich("cancelReject", capnp_ts_1.Struct.getUint16(0, this), 4, this);
        return capnp_ts_1.Struct.getStruct(0, CancelOrderReject, this);
    }
    hasCancelReject() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initCancelReject() {
        capnp_ts_1.Struct.setUint16(0, 4, this);
        return capnp_ts_1.Struct.initStructAt(0, CancelOrderReject, this);
    }
    isCancelReject() { return capnp_ts_1.Struct.getUint16(0, this) === 4; }
    setCancelReject(value) {
        capnp_ts_1.Struct.setUint16(0, 4, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptModifyReject(value) {
        capnp_ts_1.Struct.setUint16(0, 5, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownModifyReject() { return capnp_ts_1.Struct.disown(this.getModifyReject()); }
    getModifyReject() {
        capnp_ts_1.Struct.testWhich("modifyReject", capnp_ts_1.Struct.getUint16(0, this), 5, this);
        return capnp_ts_1.Struct.getStruct(0, ModifyOrderReject, this);
    }
    hasModifyReject() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initModifyReject() {
        capnp_ts_1.Struct.setUint16(0, 5, this);
        return capnp_ts_1.Struct.initStructAt(0, ModifyOrderReject, this);
    }
    isModifyReject() { return capnp_ts_1.Struct.getUint16(0, this) === 5; }
    setModifyReject(value) {
        capnp_ts_1.Struct.setUint16(0, 5, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptFill(value) {
        capnp_ts_1.Struct.setUint16(0, 6, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownFill() { return capnp_ts_1.Struct.disown(this.getFill()); }
    getFill() {
        capnp_ts_1.Struct.testWhich("fill", capnp_ts_1.Struct.getUint16(0, this), 6, this);
        return capnp_ts_1.Struct.getStruct(0, Fill, this);
    }
    hasFill() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initFill() {
        capnp_ts_1.Struct.setUint16(0, 6, this);
        return capnp_ts_1.Struct.initStructAt(0, Fill, this);
    }
    isFill() { return capnp_ts_1.Struct.getUint16(0, this) === 6; }
    setFill(value) {
        capnp_ts_1.Struct.setUint16(0, 6, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptHeartbeat(value) {
        capnp_ts_1.Struct.setUint16(0, 7, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownHeartbeat() { return capnp_ts_1.Struct.disown(this.getHeartbeat()); }
    getHeartbeat() {
        capnp_ts_1.Struct.testWhich("heartbeat", capnp_ts_1.Struct.getUint16(0, this), 7, this);
        return capnp_ts_1.Struct.getStruct(0, Heartbeat, this);
    }
    hasHeartbeat() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initHeartbeat() {
        capnp_ts_1.Struct.setUint16(0, 7, this);
        return capnp_ts_1.Struct.initStructAt(0, Heartbeat, this);
    }
    isHeartbeat() { return capnp_ts_1.Struct.getUint16(0, this) === 7; }
    setHeartbeat(value) {
        capnp_ts_1.Struct.setUint16(0, 7, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    toString() { return "OrderResponse_" + super.toString(); }
    which() { return capnp_ts_1.Struct.getUint16(0, this); }
}
exports.OrderResponse = OrderResponse;
OrderResponse.NEW_ACK = OrderResponse_Which.NEW_ACK;
OrderResponse.CANCEL_ACK = OrderResponse_Which.CANCEL_ACK;
OrderResponse.MODIFY_ACK = OrderResponse_Which.MODIFY_ACK;
OrderResponse.NEW_REJECT = OrderResponse_Which.NEW_REJECT;
OrderResponse.CANCEL_REJECT = OrderResponse_Which.CANCEL_REJECT;
OrderResponse.MODIFY_REJECT = OrderResponse_Which.MODIFY_REJECT;
OrderResponse.FILL = OrderResponse_Which.FILL;
OrderResponse.HEARTBEAT = OrderResponse_Which.HEARTBEAT;
OrderResponse._capnp = { displayName: "OrderResponse", id: "968587783f0425a1", size: new capnp_ts_1.ObjectSize(8, 1) };
class Credentials extends capnp_ts_1.Struct {
    getAccessKeyId() { return capnp_ts_1.Struct.getText(0, this); }
    setAccessKeyId(value) { capnp_ts_1.Struct.setText(0, value, this); }
    getSignature() { return capnp_ts_1.Struct.getText(1, this); }
    setSignature(value) { capnp_ts_1.Struct.setText(1, value, this); }
    getTimestamp() { return capnp_ts_1.Struct.getUint64(0, this); }
    setTimestamp(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    toString() { return "Credentials_" + super.toString(); }
}
exports.Credentials = Credentials;
Credentials._capnp = { displayName: "Credentials", id: "952646a46d62ad55", size: new capnp_ts_1.ObjectSize(8, 2) };
class RestingOrder extends capnp_ts_1.Struct {
    getOrderId() { return capnp_ts_1.Struct.getUint64(0, this); }
    setOrderId(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getExchangeOrderId() { return capnp_ts_1.Struct.getUint64(8, this); }
    setExchangeOrderId(value) { capnp_ts_1.Struct.setUint64(8, value, this); }
    getMarketId() { return capnp_ts_1.Struct.getUint64(16, this); }
    setMarketId(value) { capnp_ts_1.Struct.setUint64(16, value, this); }
    getPrice() { return capnp_ts_1.Struct.getUint64(24, this); }
    setPrice(value) { capnp_ts_1.Struct.setUint64(24, value, this); }
    getOriginalQuantity() { return capnp_ts_1.Struct.getUint64(32, this); }
    setOriginalQuantity(value) { capnp_ts_1.Struct.setUint64(32, value, this); }
    getSide() { return capnp_ts_1.Struct.getUint16(40, this); }
    setSide(value) { capnp_ts_1.Struct.setUint16(40, value, this); }
    getTimeInForce() { return capnp_ts_1.Struct.getUint16(42, this); }
    setTimeInForce(value) { capnp_ts_1.Struct.setUint16(42, value, this); }
    getOrderType() { return capnp_ts_1.Struct.getUint16(44, this); }
    setOrderType(value) { capnp_ts_1.Struct.setUint16(44, value, this); }
    getRemainingQuantity() { return capnp_ts_1.Struct.getUint64(48, this); }
    setRemainingQuantity(value) { capnp_ts_1.Struct.setUint64(48, value, this); }
    getRestTime() { return capnp_ts_1.Struct.getUint64(56, this); }
    setRestTime(value) { capnp_ts_1.Struct.setUint64(56, value, this); }
    getSubaccountId() { return capnp_ts_1.Struct.getUint64(64, this); }
    setSubaccountId(value) { capnp_ts_1.Struct.setUint64(64, value, this); }
    toString() { return "RestingOrder_" + super.toString(); }
}
exports.RestingOrder = RestingOrder;
RestingOrder._capnp = { displayName: "RestingOrder", id: "f71ab1a90c23c697", size: new capnp_ts_1.ObjectSize(72, 0) };
class Done extends capnp_ts_1.Struct {
    getLatestMsgSeqNum() { return capnp_ts_1.Struct.getUint64(0, this); }
    setLatestMsgSeqNum(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    toString() { return "Done_" + super.toString(); }
}
exports.Done = Done;
Done._capnp = { displayName: "Done", id: "9f034afeddc2b66d", size: new capnp_ts_1.ObjectSize(8, 0) };
var Bootstrap_Which;
(function (Bootstrap_Which) {
    Bootstrap_Which[Bootstrap_Which["DONE"] = 0] = "DONE";
    Bootstrap_Which[Bootstrap_Which["RESTING"] = 1] = "RESTING";
})(Bootstrap_Which = exports.Bootstrap_Which || (exports.Bootstrap_Which = {}));
class Bootstrap extends capnp_ts_1.Struct {
    adoptDone(value) {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownDone() { return capnp_ts_1.Struct.disown(this.getDone()); }
    getDone() {
        capnp_ts_1.Struct.testWhich("done", capnp_ts_1.Struct.getUint16(0, this), 0, this);
        return capnp_ts_1.Struct.getStruct(0, Done, this);
    }
    hasDone() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initDone() {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        return capnp_ts_1.Struct.initStructAt(0, Done, this);
    }
    isDone() { return capnp_ts_1.Struct.getUint16(0, this) === 0; }
    setDone(value) {
        capnp_ts_1.Struct.setUint16(0, 0, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    adoptResting(value) {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    disownResting() { return capnp_ts_1.Struct.disown(this.getResting()); }
    getResting() {
        capnp_ts_1.Struct.testWhich("resting", capnp_ts_1.Struct.getUint16(0, this), 1, this);
        return capnp_ts_1.Struct.getStruct(0, RestingOrder, this);
    }
    hasResting() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initResting() {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        return capnp_ts_1.Struct.initStructAt(0, RestingOrder, this);
    }
    isResting() { return capnp_ts_1.Struct.getUint16(0, this) === 1; }
    setResting(value) {
        capnp_ts_1.Struct.setUint16(0, 1, this);
        capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
    }
    toString() { return "Bootstrap_" + super.toString(); }
    which() { return capnp_ts_1.Struct.getUint16(0, this); }
}
exports.Bootstrap = Bootstrap;
Bootstrap.DONE = Bootstrap_Which.DONE;
Bootstrap.RESTING = Bootstrap_Which.RESTING;
Bootstrap._capnp = { displayName: "Bootstrap", id: "b1354a22c91c4917", size: new capnp_ts_1.ObjectSize(8, 1) };
