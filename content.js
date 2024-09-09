
function main() {
  loadDefferedContent();
  // Give github time to load deffered content.
  setTimeout(injectResolverInfo, 1000)
}

// Start script:
main()

// ############################################
//                 Functions
// ############################################

/** Dependant on loadDefferedContent. */
function injectResolverInfo() {

  const resolvedThreads = document.querySelectorAll('details[data-resolved=true]');
  
  resolvedThreads.forEach((conversation, i) => {
    const usernameSelector = 'div.js-inline-comments-container form.js-resolvable-timeline-thread-form strong'
    const username = conversation.querySelector(usernameSelector).textContent
    
    const toggleButtons = conversation.querySelectorAll('summary div.d-flex span.btn-link');
    toggleButtons.forEach((btn, j)=>{
      btn.textContent = `Resolved by ${username}`
    })
  });
}

/**
 * Found in the DOM at Event Listeners.
 * Triggering this event will make github load deffered content.
 */
function loadDefferedContent() {
  const triggerPoints = document.querySelectorAll('summary.js-toggle-outdated-comments')
  triggerPoints.forEach(_triggerMouseEnterEvent);
}


// ############################################
//                  Helpers
// ############################################

function _triggerMouseEnterEvent(element) {
  const mouseOverEvent = new MouseEvent('mouseenter', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(mouseOverEvent);
}
