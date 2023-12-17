


function listener(details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
  
    console.log("onBeforeRequest", details, filter);

    filter.onstart = (event) => {
      console.log("onstart", event);
    };

    filter.ondata = (event) => {
      console.log("ondata", event);
      filter.write(event.data);
      filter.disconnect();
    };

    filter.onerror = (event) => {
      console.error("onerror", event);
    };
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {
      urls: [
        "<all_urls>"
      ],
      types: [
        "main_frame"
      ]
    },
    ["blocking"],
  );
  