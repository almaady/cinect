import React from "react";
import { shallow, configure } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "../MovieCard";
import "../../../__mocks__/intersectionObserverMock";

describe("MovieCard", () => {
  const action = sinon.stub();
  let props;

  beforeEach(() => {
    props = {
      movieId: 724089,
      imageURL:
        "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
      title: "Movie title",
      date: "1995-12-01",
      genres: [28, 16],
      rate: 9.5,
      home: false,
      addToWatchList: action,
      watchList: [{id: 724089, original_title: "Gabriel's Inferno Part II"}],
      removeFromWatchList: action,
    };
  });

  configure({ adapter: new Adapter() });
  it("should render correctly with default state", () => {
    const component = shallow(<MovieCard {...props} />);
    expect(component).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it("should render addButton with home prop", ()=>{
    const component = shallow(<MovieCard {...props} home={true}/>);
    expect(component.find("#addButton")).toBeTruthy()
  });

  it("should call action when you click, with home prop",()=>{
    const component = shallow(<MovieCard {...props} home={true}/>);
    component.find("#addButton").simulate("click");
    expect(action.called).toBeTruthy();
  });

  it("should render inWatchList when its id is in Watchlist prop", ()=>{
    const component = shallow(<MovieCard {...props} home={true}/>);
    expect(component.find("#inWatchList")).toBeTruthy()
  })

  it("should render removeButton whithout home prop and it's in watchList", ()=>{
    const component = shallow(<MovieCard {...props}/>);
    expect(component.find("#removeButton")).toBeTruthy()
  })

  it("should call action when you click at removeButton", ()=>{
    const component = shallow(<MovieCard {...props}/>);
    component.find("#removeButton").simulate("click");
    expect(action.called).toBeTruthy();
  })

  it("should get an array of genres texts", ()=>{
    const component = shallow(<MovieCard {...props}/>);
    const genresContainer = component.find("#genresContainer")
    const genresList = genresContainer.find("span").map((node)=> node.text())
    expect(genresList).toEqual(["Action","Animation" ])
  })

});
