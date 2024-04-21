import React from 'react';


function NotFoundPage() {

  return (
<div class="container">
    <div class="row">
        <div class="col-md-8 mx-auto text-center">
            <h1 class="font-weight-bold">404</h1>
            
            <h5 class="font-weight-bold">Page not found</h5>
            <p class="mb-5">The requested URL was not found on this server. <br /> The page might have been removed.</p>
            <smart-button class="primary outlined smart-element smart-button" id="buttonf9cf" role="button"><button class="smart-button smart-unselectable smart-container" type="button" role="presentation" smart-id="button" tabindex="0">Return to Home</button></smart-button>
        </div>
    </div>
</div>
  );
}

export default NotFoundPage;