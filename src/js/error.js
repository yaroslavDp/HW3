export class myCustomError {
  constructor(message) {
    this.message = message;
  }

  display() {
    const errorEl = document.createElement('div');
    errorEl.classList.add('error');
    errorEl.innerHTML = `
      <p>Error: ${this.message}</p>
    `;
    return errorEl;
  }
}