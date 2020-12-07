import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("reducer should change toggle accordeon", () => {

    //data
    const startState: StateType = {
        collapsed: true
    }
    const newToggleValue = false
    const action = {
        type: TOGGLE_COLLAPSED,
        collapsed: newToggleValue
    }

    //action
    const newState = reducer(startState, action)

    //expected
    expect(newState.collapsed).toBe(false)
})

test("received error because incorrect type", () => {
    const startState: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(startState, {type: "FAKE-TYPE"})
    }).toThrowError
})