var UserSession = (function() {
  var username = "";
  var token = "";
  var valid = false;

  var loadSession = function() {
    var session = JSON.parse(localStorage.getItem("session") || "{}");
    username = session.username || "";
    token = session.token || "";
  };

  var saveSession = function() {
    localStorage.setItem("session", JSON.stringify({ username, token }));
  };

  var getUsername = function() {
    return username;
  };

  var setUsername = function(name : string) {
    username = name;
    saveSession();
  };

  var getToken = function() {
    return token;
  };

  var setToken = function(t : string) {
    token = t;
    saveSession();
  };

  var clearSession = function() {
    username = "";
    token = "";
    saveSession();
  };

  var checkValid = function() {
    // todo
  }

  var isValid = function() {
    return valid;
  };

  loadSession();
  if (token != "") {
    checkValid();
  }

  var makeRequest = function(method : string, url : string, data : any) {
    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data)
    });
  }

  return {
    getUsername,
    setUsername,
    getToken,
    setToken,
    saveSession,
    clearSession,
    isValid,
    makeRequest,
  }
})();

export default UserSession;