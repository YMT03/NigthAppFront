let headers_ = new Headers
headers_.set('Accept','application/json')
headers_.set('Content-Type','application/json')
export function getHeaders() {
  return headers;
}
export function setCredentials(UserName, Password) {
  headers_.set('Authorization', 'Basic ' + btoa(UserName + ":" + Password))
}

export function resetHeaders(){
  headers_ = new Headers
  headers_.set('Accept','application/json')
  headers_.set('Content-Type','application/json')
}