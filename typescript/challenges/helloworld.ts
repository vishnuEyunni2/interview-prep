import { Expect, NotAny, Equal, IsAny } from '../utils/index'

type HelloWorld = string;

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
