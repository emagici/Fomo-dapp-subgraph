// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ListedItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("pricePerItem", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("isPrivate", Value.fromBoolean(false));
    this.set("allowedAddress", Value.fromBytes(Bytes.empty()));
    this.set("nft", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ListedItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ListedItem entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ListedItem", id.toString(), this);
    }
  }

  static load(id: string): ListedItem | null {
    return changetype<ListedItem | null>(store.get("ListedItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get pricePerItem(): BigDecimal {
    let value = this.get("pricePerItem");
    return value!.toBigDecimal();
  }

  set pricePerItem(value: BigDecimal) {
    this.set("pricePerItem", Value.fromBigDecimal(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get isPrivate(): boolean {
    let value = this.get("isPrivate");
    return value!.toBoolean();
  }

  set isPrivate(value: boolean) {
    this.set("isPrivate", Value.fromBoolean(value));
  }

  get allowedAddress(): Bytes {
    let value = this.get("allowedAddress");
    return value!.toBytes();
  }

  set allowedAddress(value: Bytes) {
    this.set("allowedAddress", Value.fromBytes(value));
  }

  get nft(): Bytes {
    let value = this.get("nft");
    return value!.toBytes();
  }

  set nft(value: Bytes) {
    this.set("nft", Value.fromBytes(value));
  }
}
