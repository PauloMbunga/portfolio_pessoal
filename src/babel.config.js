const { Module } = require("module")

module.exports ={
    presets: ["next/babel"],
    plugins: [["styled-components", { "ssr": true }]]
  }