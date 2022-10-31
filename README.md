<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px; margin-right: 10px;" />
</p>
<h3 align="center">@galatajs/core</h3>
<p align="center">
  errors, results or more for galatajs framework and you.
</p>

### What Is It?

It contains some core packages for the ``galatajs framework`` to work in certain standards. Although it was developed for the ``galatajs framework``, you can use it if you want. 

You don't have to use ``galatajs`` framework, `@galatajs/core` is a nodejs package.

🔗 [access on npm](https://www.npmjs.com/package/@galatajs/core)

### Installation

```sh
npm install @galatajs/core
```

> or with yarn
>
> ```
> yarn add @galatajs/core
> ```

### Usage Results

```typescript
import { SuccessDataResult } from "@galatajs/core";

export type Product = {
    id: number;
    name: string;
    price: number;
}

const product : Product = {
    id: 1,
    name: "Product 1",
    price: 10
}

const result = new SuccessDataResult<Product>("Product created successfully", product);
console.log(result);
/**
 success: true,
 message: "Product created successfully",
 data: { id: 1, name: "Product 1", price: 10 }
 * */
```

### Usage Errors

```typescript
import {BadRequestError} from "@galatajs/core";

const error = new BadRequestError("Product name is required");
console.log(error);
/**
 success: false,
 message: "Product name is required",
 code: 400
 * */
```

When the framework is completed, the document will be made more detailed.