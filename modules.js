const MyModule = {
  doSomething() {
    console.log("I'm doing something");
  }
}

export default MyModule

export function topLevelMethod() {
  console.log("you can import me separetely")
}
