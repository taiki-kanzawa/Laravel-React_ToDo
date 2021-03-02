<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <title>ToDo</title>

    </head>
    <body>
        <div id="app">
            <div class="container">
                <h3 class="mt-5">Todo 管理システム</h3>

                <div id="todoApp"></div>
            </div>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
