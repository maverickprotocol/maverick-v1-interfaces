// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface IAddLiquidityCallback {
    function addLiquidityCallback(
        uint256 amountA,
        uint256 amountB,
        bytes calldata data
    ) external;
}
