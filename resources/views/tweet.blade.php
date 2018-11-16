<form action="/tt" method="post">
{{-- @method('POST') --}}
@csrf
    <input type="text" name="body">
    <button type="submit">Save</button>
</form>