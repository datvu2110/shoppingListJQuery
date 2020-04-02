$(document).on("click","#js-shopping-list-form button" ,addBox);
$(document).on("click", ".shopping-item-delete",deleteBox);
$(document).on("click", ".shopping-item-toggle",toggleItem);

function toggleItem(e){
  e.preventDefault();
  $(this).closest('li').find(".shopping-item").toggleClass('shopping-item__checked');
}

function deleteBox(e){
  e.preventDefault();
  $(this).closest('li').remove();
}

function addBox(e){
  e.preventDefault();
  let input = $("#shopping-list-entry").val();
  if (input.length > 0){
    $('.shopping-list').prepend(`<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
    <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
    <span class="button-label">delete</span>
    </button>
    </div>
    </li>`);
  }
  $("#shopping-list-entry").val('')
}