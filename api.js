<script>
$( document ).ready(function() {
  function search(){
    $.ajax({
      url: "/tables_filter/"+documentSelected+"/"+pageSelected,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(search),
    }).done(function(data) {
      console.log(data);
    });
  };
});
</script>
