// stead of statically importing lodash, we'll use dynamic importing to separate a chunk:

// import _ from 'lodash';
function component() {
    function getComponent() {
        const element = document.createElement('div');

        // Lodash, now imported by this script
        //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return import('lodash')
            .then(({ default: _ }) => {
                const element = document.createElement('div');

                element.innerHTML = _.join(['Hello', 'webpack'], ' ');

                return element;
                return element;
            })
            .catch((error) => 'An error occurred while loading the component');
    }

    // document.body.appendChild(component());
    getComponent().then((component) => {
        document.body.appendChild(component);
    });
}

// As import() returns a promise, it can be used with async functions. Here's how it would simplify the code:
function asyncComponent() {
    async function getComponent() {
        const element = document.createElement('div');

        const { default: _ } = await import('lodash');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

    getComponent().then((component) => {
        document.body.appendChild(component);
    });
}

// Prefetching/Preloading modules
// Webpack 4.6.0+ adds support for prefetching and preloading.

// Using these inline directives while declaring your imports allows webpack to output “Resource Hint” which tells the browser that for:

// prefetch: resource is probably needed for some navigation in the future
// preload: resource will also be needed during the current navigation
// An example of this is having a HomePage component, which renders a LoginButton component which then on demand loads a LoginModal component after being clicked.

// LoginButton.js

// //...
// import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
// This will result in <link rel="prefetch" href="login-modal-chunk.js"> being appended in the head of the page, which will instruct the browser to prefetch in idle time the login-modal-chunk.js file.


// Preload directive has a bunch of differences compared to prefetch:

// A preloaded chunk starts loading in parallel to the parent chunk. A prefetched chunk starts after the parent chunk finishes loading.
// A preloaded chunk has medium priority and is instantly downloaded. A prefetched chunk is downloaded while the browser is idle.
// A preloaded chunk should be instantly requested by the parent chunk. A prefetched chunk can be used anytime in the future.
// Browser support is different.
// An example of this can be having a Component which always depends on a big library that should be in a separate chunk.

// Let's imagine a component ChartComponent which needs a huge ChartingLibrary. It displays a LoadingIndicator when rendered and instantly does an on demand import of ChartingLibrary:

// ChartComponent.js

// //...
// import(/* webpackPreload: true */ 'ChartingLibrary');
// When a page which uses the ChartComponent is requested, the charting-library-chunk is also requested via <link rel="preload">. Assuming the page-chunk is smaller and finishes faster, the page will be displayed with a LoadingIndicator, until the already requested charting-library-chunk finishes. This will give a little load time boost since it only needs one round-trip instead of two. Especially in high-latency environments.

// Using webpackPreload incorrectly can actually hurt performance, so be careful when using it.


// Sometimes you need to have your own control over preload. For example, preload of any dynamic import can be done via async script. This can be useful in case of streamming server side rendering.

// const lazyComp = () =>
//   import('DynamicComponent').catch((error) => {
//     // Do something with the error.
//     // For example, we can retry the request in case of any net error
//   });
// If the script loading will fail before webpack starts loading of that script by itself (webpack just creates a script tag to load its code, if that script is not on a page), that catch handler won't start till chunkLoadTimeout is not passed. This behavior can be unexpected. But it's explainable — webpack can not throw any error, cause webpack doesn't know, that script failed. Webpack will add onerror handler to the script right after the error has happen.

// To prevent such problem you can add your own onerror handler, which removes the script in case of any error:

// <script
//   src="https://example.com/dist/dynamicComponent.js"
//   async
//   onerror="this.remove()"
// ></script>
// In that case, errored script will be removed. Webpack will create its own script and any error will be processed without any timeouts.


// Lazy Loading
// Lazy, or "on demand", loading is a great way to optimize your site or application. This practice essentially involves splitting your code at logical breakpoints, and then loading it once the user has done something that requires, or will require, a new block of code. This speeds up the initial load of the application and lightens its overall weight as some blocks may never even be loaded.
