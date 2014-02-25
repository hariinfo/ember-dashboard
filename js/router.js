Todos.Router.map(function() {
  this.resource('board_main', { path: '/' });
  this.route("reports", { path: "/reports" });
  this.route("overview", { path: "/overview" });
});

