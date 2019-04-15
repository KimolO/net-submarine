# net-submarine

A typescript library that help you intercept requests and extract and classify extracted data.

## Usage Example

Create a page ( pupetter page):

```typescript
const page = await netSubmarine.getPage(options);
```

In typescript you can then log all the alexa metrics found 

```typescript
netSubmarine.metrics.alexa(page, (alexaTracker: IAlexa) => {
    console.log(alexaTracker);
})
```

## Develope

Build
    npm run build
Test
    npm run test
    npm run testWithCoverage

## License

ISC License