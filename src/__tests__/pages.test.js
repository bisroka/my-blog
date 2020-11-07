import React from 'react';
import { getPageQueryData } from "gatsby-plugin-testing"
import renderer from "react-test-renderer"
import IndexPage from "../pages/index"
import BlogPage from "../pages/blog"
import AboutMePage from "../pages/aboutMe"
import ContactPage from "../pages/contact"


describe("IndexPage render", () => {
  it("renders homepage", async () => {
    const tree = renderer
      .create(<IndexPage data={await getPageQueryData("index")} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe("BlogPage render", () => {
  it("renders blogapage", async () => {
    const tree = renderer
      .create(<BlogPage data={await getPageQueryData("index")} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe("AboutMePage render", () => {
    it("renders AboutMePage", async () => {
      const tree = renderer
        .create(<AboutMePage data={await getPageQueryData("index")} />)
        .toJSON()
  
      expect(tree).toMatchSnapshot()
    })
  })
  
  describe("ContactPage render", () => {
    it("renders AboutMePage", async () => {
      const tree = renderer
        .create(<ContactPage data={await getPageQueryData("index")} />)
        .toJSON()
  
      expect(tree).toMatchSnapshot()
    })
  })