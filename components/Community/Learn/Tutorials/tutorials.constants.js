const tutorials = [
  {
    text: 'Using Wasmer with Rust',
    link: 'https://docs.wasmer.io/integrations/rust',
    icon:
      'data:image/svg+xml;charset=utf-8;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OC4xMyI+CjxwYXRoIGQ9Ik00Ny40OSwyMy4zbC0yLTEuMjNjLTAuMDItMC4xOS0wLjAzLTAuMzktMC4wNS0wLjU4bDEuNzEtMS41OWMwLjE3LTAuMTYsMC4yNS0wLjQsMC4yLTAuNjQKCWMtMC4wNC0wLjIzLTAuMjEtMC40Mi0wLjQ0LTAuNTFsLTIuMTktMC44MmMtMC4wNS0wLjE5LTAuMTItMC4zOC0wLjE3LTAuNTZsMS4zNy0xLjljMC4xNC0wLjE5LDAuMTctMC40NSwwLjA3LTAuNjYKCWMtMC4xLTAuMjItMC4yOS0wLjM3LTAuNTItMC40MWwtMi4zLTAuMzdjLTAuMDgtMC4xNy0wLjE4LTAuMzUtMC4yOC0wLjUybDAuOTctMi4xMmMwLjEtMC4yMSwwLjA3LTAuNDctMC4wNS0wLjY3CgljLTAuMTMtMC4yLTAuMzUtMC4zMi0wLjU5LTAuMzFsLTIuMzUsMC4wOGMtMC4xMi0wLjE1LTAuMjQtMC4zLTAuMzctMC40NWwwLjU0LTIuMjhjMC4wNS0wLjIzLTAuMDEtMC40OC0wLjE4LTAuNjUKCWMtMC4xNy0wLjE3LTAuNDEtMC4yMy0wLjY0LTAuMThsLTIuMjgsMC41NGMtMC4xNS0wLjEzLTAuMy0wLjI0LTAuNDUtMC4zN2wwLjA4LTIuMzVjMC4wMS0wLjIzLTAuMTEtMC40Ny0wLjMxLTAuNTkKCUMzNy4wOCw0LjAzLDM2LjgzLDQsMzYuNjEsNC4xbC0yLjEyLDAuOTdjLTAuMTctMC4xLTAuMzQtMC4xOS0wLjUyLTAuMjhsLTAuMzctMi4zYy0wLjA0LTAuMjMtMC4xOS0wLjQ0LTAuNDEtMC41MgoJYy0wLjIyLTAuMS0wLjQ3LTAuMDYtMC42NiwwLjA3bC0xLjksMS4zN2MtMC4xOS0wLjA2LTAuMzctMC4xMi0wLjU2LTAuMTdsLTAuODItMi4xOWMtMC4wOC0wLjIyLTAuMjgtMC4zOC0wLjUxLTAuNDQKCWMtMC4yMy0wLjA0LTAuNDgsMC4wMy0wLjY0LDAuMkwyNi41LDIuNTNjLTAuMTktMC4wMi0wLjM4LTAuMDQtMC41OC0wLjA1bC0xLjIzLTJjLTAuMTQtMC4yLTAuMzYtMC4zMy0wLjU5LTAuMzMKCXMtMC40NiwwLjEzLTAuNTgsMC4zM2wtMS4yMywyYy0wLjE5LDAuMDEtMC4zOSwwLjAzLTAuNTgsMC4wNUwyMC4xLDAuODJjLTAuMTYtMC4xNy0wLjQtMC4yNS0wLjY0LTAuMgoJYy0wLjIzLDAuMDQtMC40MiwwLjIxLTAuNTEsMC40NGwtMC44MiwyLjE4Yy0wLjE5LDAuMDUtMC4zOCwwLjEyLTAuNTYsMC4xN2wtMS45LTEuMzdjLTAuMTktMC4xNC0wLjQ1LTAuMTctMC42Ni0wLjA3CgljLTAuMjIsMC4xLTAuMzcsMC4yOS0wLjQxLDAuNTJsLTAuMzcsMi4zYy0wLjE3LDAuMDgtMC4zNSwwLjE4LTAuNTIsMC4yOGwtMi4xMi0wLjk3Yy0wLjIxLTAuMS0wLjQ3LTAuMDctMC42NywwLjA1CgljLTAuMiwwLjEzLTAuMzIsMC4zNi0wLjMxLDAuNTlsMC4wOCwyLjM1Yy0wLjE1LDAuMTItMC4zLDAuMjQtMC40NSwwLjM3TDcuOTUsNi45MUM3LjcyLDYuODYsNy40Nyw2Ljk0LDcuMzEsNy4xCgljLTAuMTcsMC4xNi0wLjI0LDAuNC0wLjE5LDAuNjRsMC41NCwyLjI4Yy0wLjEzLDAuMTUtMC4yNCwwLjMtMC4zNywwLjQ1bC0yLjM1LTAuMDhjLTAuMjMtMC4wMS0wLjQ3LDAuMTEtMC41OSwwLjMxCglTNC4yLDExLjE0LDQuMywxMS4zNmwwLjk3LDIuMTJjLTAuMSwwLjE3LTAuMTksMC4zNC0wLjI4LDAuNTJsLTIuMywwLjM3Yy0wLjIzLDAuMDQtMC40NCwwLjE5LTAuNTIsMC40MQoJYy0wLjA4LDAuMjItMC4wNiwwLjQ4LDAuMDcsMC42N2wxLjM3LDEuOWMtMC4wNiwwLjE5LTAuMTIsMC4zNy0wLjE3LDAuNTZsLTIuMTksMC44MmMtMC4yMiwwLjA4LTAuMzgsMC4yOC0wLjQ0LDAuNTEKCWMtMC4wNCwwLjIzLDAuMDMsMC40OCwwLjIsMC42NGwxLjcxLDEuNTljLTAuMDIsMC4xOS0wLjA0LDAuMzgtMC4wNSwwLjU4TDAuNjksMjMuM2MtMC4yLDAuMTMtMC4zMywwLjM0LTAuMzMsMC41OAoJYzAsMC4yNCwwLjEzLDAuNDYsMC4zMywwLjU4bDIsMS4yM2MwLjAyLDAuMTksMC4wMywwLjM5LDAuMDUsMC41OGwtMS43MSwxLjU5Yy0wLjE3LDAuMTYtMC4yNSwwLjQtMC4yLDAuNjQKCWMwLjA0LDAuMjMsMC4yMSwwLjQyLDAuNDQsMC41MWwyLjE5LDAuODJjMC4wNSwwLjE5LDAuMTIsMC4zOCwwLjE3LDAuNTZsLTEuMzgsMS44OWMtMC4xNCwwLjE5LTAuMTcsMC40NS0wLjA3LDAuNjYKCWMwLjEsMC4yMiwwLjI5LDAuMzcsMC41MiwwLjQxbDIuMywwLjM3YzAuMDgsMC4xNywwLjE4LDAuMzUsMC4yOCwwLjUyTDQuMywzNi4zOGMtMC4xLDAuMjEtMC4wNywwLjQ3LDAuMDUsMC42NwoJYzAuMTMsMC4yLDAuMzYsMC4zMiwwLjU5LDAuMzFsMi4zNC0wLjA4YzAuMTIsMC4xNSwwLjI0LDAuMywwLjM3LDAuNDVsLTAuNTMsMi4yOWMtMC4wNSwwLjIzLDAuMDEsMC40OCwwLjE4LDAuNjQKCWMwLjE3LDAuMTcsMC40MSwwLjIzLDAuNjUsMC4xOGwyLjI4LTAuNTRjMC4xNSwwLjEzLDAuMywwLjI0LDAuNDUsMC4zN2wtMC4wOCwyLjM1Yy0wLjAxLDAuMjMsMC4xMSwwLjQ3LDAuMzEsMC41OQoJYzAuMiwwLjEzLDAuNDUsMC4xNSwwLjY3LDAuMDVsMi4xMi0wLjk3YzAuMTcsMC4xLDAuMzQsMC4xOSwwLjUyLDAuMjhsMC4zOCwyLjMxYzAuMDQsMC4yMywwLjE5LDAuNDQsMC40MSwwLjUyCgljMC4yMiwwLjEsMC40NywwLjA2LDAuNjYtMC4wN2wxLjktMS4zN2MwLjE5LDAuMDYsMC4zNywwLjEyLDAuNTYsMC4xN2wwLjgyLDIuMTljMC4wOCwwLjIyLDAuMjgsMC4zOCwwLjUxLDAuNDQKCWMwLjIzLDAuMDQsMC40OC0wLjAzLDAuNjQtMC4ybDEuNTktMS43MWMwLjE5LDAuMDIsMC4zOCwwLjA0LDAuNTgsMC4wNWwxLjIzLDJjMC4xMywwLjIsMC4zNCwwLjMzLDAuNTgsMC4zMwoJYzAuMjMsMCwwLjQ2LTAuMTMsMC41OC0wLjMzbDEuMjMtMmMwLjE5LTAuMDIsMC4zOS0wLjAzLDAuNTgtMC4wNWwxLjU5LDEuNzFjMC4xNiwwLjE3LDAuNCwwLjI1LDAuNjQsMC4yCgljMC4yMy0wLjA0LDAuNDItMC4yMSwwLjUxLTAuNDRsMC44Mi0yLjE5YzAuMTktMC4wNSwwLjM4LTAuMTIsMC41Ni0wLjE3bDEuOSwxLjM3YzAuMTksMC4xNCwwLjQ1LDAuMTcsMC42NiwwLjA3CgljMC4yMi0wLjA4LDAuMzctMC4yOSwwLjQxLTAuNTJsMC4zNy0yLjNjMC4xNy0wLjEsMC4zNS0wLjE4LDAuNTItMC4yOGwyLjEyLDAuOTdjMC4yMSwwLjEsMC40NywwLjA3LDAuNjctMC4wNQoJYzAuMi0wLjEzLDAuMzEtMC4zNiwwLjMxLTAuNTlsLTAuMDgtMi4zNWMwLjE1LTAuMTIsMC4zLTAuMjQsMC40NS0wLjM3bDIuMjgsMC41NGMwLjIzLDAuMDUsMC40OC0wLjAxLDAuNjQtMC4xOAoJYzAuMTctMC4xNywwLjIzLTAuNDEsMC4xOC0wLjY0bC0wLjU0LTIuMjhjMC4xMy0wLjE1LDAuMjQtMC4zLDAuMzctMC40NWwyLjM1LDAuMDhjMC4yMywwLjAxLDAuNDctMC4xMSwwLjU5LTAuMzEKCWMwLjEzLTAuMiwwLjE1LTAuNDUsMC4wNS0wLjY3bC0wLjk3LTIuMTJjMC4xLTAuMTcsMC4xOS0wLjM0LDAuMjgtMC41MmwyLjMtMC4zN2MwLjIzLTAuMDQsMC40NC0wLjE5LDAuNTItMC40MQoJYzAuMS0wLjIyLDAuMDYtMC40Ny0wLjA3LTAuNjZsLTEuMzctMS45YzAuMDYtMC4xOSwwLjEyLTAuMzcsMC4xNy0wLjU2bDIuMTktMC44MmMwLjIyLTAuMDgsMC4zOC0wLjI4LDAuNDQtMC41MQoJYzAuMDQtMC4yMy0wLjAzLTAuNDgtMC4yLTAuNjRsLTEuNzEtMS41OWMwLjAyLTAuMTksMC4wNC0wLjM4LDAuMDUtMC41OGwyLTEuMjNjMC4yLTAuMTMsMC4zMy0wLjM0LDAuMzMtMC41OAoJQzQ3LjgxLDIzLjY0LDQ3LjcsMjMuNDMsNDcuNDksMjMuM3ogTTM0LjE2LDM5LjgyYy0wLjc2LTAuMTYtMS4yNC0wLjkxLTEuMDgtMS42OGMwLjE2LTAuNzYsMC45MS0xLjI0LDEuNjgtMS4wOAoJYzAuNzYsMC4xNiwxLjI0LDAuOTEsMS4wOCwxLjY4QzM1LjY3LDM5LjUsMzQuOTIsMzkuOTksMzQuMTYsMzkuODJ6IE0zMy40OCwzNS4yNGMtMC42OS0wLjE1LTEuMzgsMC4zLTEuNTMsMC45OWwtMC43MSwzLjMKCWMtMi4xOSwwLjk5LTQuNjEsMS41NC03LjE2LDEuNTRjLTIuNjEsMC01LjA5LTAuNTctNy4zMS0xLjYxbC0wLjcxLTMuM2MtMC4xNS0wLjY5LTAuODMtMS4xNC0xLjUzLTAuOTlsLTIuOTEsMC42MwoJYy0wLjU0LTAuNTUtMS4wNC0xLjE1LTEuNTEtMS43N2gxNC4xOGMwLjE2LDAsMC4yNy0wLjAzLDAuMjctMC4xN3YtNS4wMWMwLTAuMTUtMC4xMS0wLjE3LTAuMjctMC4xN2gtNC4xNVYyNS41aDQuNDgKCWMwLjQxLDAsMi4xOSwwLjEyLDIuNzYsMi4zOWMwLjE4LDAuNywwLjU3LDIuOTcsMC44NCwzLjcxYzAuMjcsMC44MiwxLjM1LDIuNDUsMi41MSwyLjQ1aDcuMDZjMC4wOCwwLDAuMTctMC4wMSwwLjI1LTAuMDIKCWMtMC40OSwwLjY3LTEuMDMsMS4zLTEuNiwxLjg5TDMzLjQ4LDM1LjI0eiBNMTMuODcsMzkuNzZjLTAuNzYsMC4xNi0xLjUxLTAuMzItMS42OC0xLjA4Yy0wLjE2LTAuNzYsMC4zMi0xLjUxLDEuMDgtMS42OAoJYzAuNzYtMC4xNiwxLjUxLDAuMzIsMS42OCwxLjA4QzE1LjEyLDM4Ljg0LDE0LjYzLDM5LjU5LDEzLjg3LDM5Ljc2eiBNOC40OSwxNy45NWMwLjMyLDAuNzEtMC4wMSwxLjU1LTAuNzIsMS44NgoJYy0wLjcxLDAuMzItMS41NC0wLjAxLTEuODYtMC43MmMtMC4zMi0wLjcxLDAuMDEtMS41NSwwLjcyLTEuODZDNy4zNSwxNi45MSw4LjE3LDE3LjIzLDguNDksMTcuOTV6IE02Ljg0LDIxLjg2bDMuMDQtMS4zNQoJYzAuNjUtMC4yOSwwLjk1LTEuMDUsMC42Ni0xLjdMOS45MSwxNy40aDIuNDZ2MTEuMDlINy40Yy0wLjQ0LTEuNTEtMC42Ni0zLjExLTAuNjYtNC43NkM2Ljc0LDIzLjEsNi43NywyMi40Nyw2Ljg0LDIxLjg2egoJIE0yMC4xNiwyMC43OHYtMy4yN2g1Ljg1YzAuMywwLDIuMTMsMC4zNSwyLjEzLDEuNzJjMCwxLjE0LTEuNCwxLjU1LTIuNTYsMS41NUgyMC4xNkwyMC4xNiwyMC43OHogTTQxLjQ0LDIzLjcyCgljMCwwLjQ0LTAuMDIsMC44Ni0wLjA0LDEuMjhoLTEuNzhjLTAuMTgsMC0wLjI1LDAuMTItMC4yNSwwLjI5djAuODJjMCwxLjkyLTEuMDgsMi4zNS0yLjA0LDIuNDVjLTAuOSwwLjExLTEuOTEtMC4zOC0yLjAzLTAuOTMKCWMtMC41My0zLTEuNDItMy42NC0yLjgyLTQuNzZjMS43NC0xLjEsMy41Ni0yLjc0LDMuNTYtNC45M2MwLTIuMzYtMS42MS0zLjg1LTIuNzItNC41OGMtMS41NS0xLjAyLTMuMjYtMS4yMi0zLjczLTEuMjJIMTEuMTcKCWMyLjUtMi43OCw1Ljg4LTQuNzYsOS43MS01LjQ4bDIuMTcsMi4yN2MwLjQ5LDAuNTEsMS4zMSwwLjUzLDEuODIsMC4wNGwyLjQzLTIuMzNjNS4wOSwwLjk1LDkuNCw0LjExLDExLjg4LDguNDZsLTEuNjcsMy43NgoJYy0wLjI5LDAuNjUsMC4wMSwxLjQxLDAuNjYsMS43bDMuMiwxLjQyQzQxLjQxLDIyLjU3LDQxLjQ0LDIzLjE0LDQxLjQ0LDIzLjcyeiBNMjMuMDQsNC43NGMwLjU2LTAuNTQsMS40NS0wLjUyLDIsMC4wNAoJczAuNTIsMS40NS0wLjA0LDJjLTAuNTYsMC41NC0xLjQ1LDAuNTItMi0wLjA0UzIyLjQ4LDUuMjgsMjMuMDQsNC43NHogTTM5LjUzLDE4LjAxYzAuMzItMC43MSwxLjE1LTEuMDMsMS44Ni0wLjcyCgljMC43MSwwLjMyLDEuMDMsMS4xNSwwLjcyLDEuODZjLTAuMzIsMC43MS0xLjE1LDEuMDMtMS44NiwwLjcyUzM5LjIyLDE4LjcyLDM5LjUzLDE4LjAxeiIvPgo8L3N2Zz4K',
  },
  {
    text: 'Using Wasmer with C/C++',
    link: 'https://docs.wasmer.io/integrations/c',
    icon:
      'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA1MC4yMiI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC45O2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NC45NywxNC43YzAtMC43Mi0wLjE3LTEuNDQtMC41Mi0yLjA4Yy0wLjM4LTAuNjQtMC45MS0xLjE3LTEuNTYtMS41M0wyNS43LDEuMTljLTEuMzktMC45MS0zLjE4LTAuOTEtNC41NywwCglDMTguODcsMi41Myw3LjQ3LDkuMDgsNC4wNywxMS4wNGMtMS4zMiwwLjcyLTIuMTMsMi4xMy0yLjA2LDMuNjR2MTkuOTRjLTAuMDIsMC43MiwwLjE1LDEuNDMsMC41LDIuMDYKCWMwLjM4LDAuNjUsMC45MSwxLjIsMS41OCwxLjU2YzMuNDQsMS45NiwxNC44LDguNTksMTcuMDcsOS44NWMxLjM5LDAuOTEsMy4xOCwwLjkxLDQuNTcsMGwxNy4xOS05LjljMS4zNC0wLjcyLDIuMTUtMi4xNSwyLjA4LTMuNjgKCUw0NC45NywxNC43eiBNMjMuNzMsMzEuNTJjMi4wOCwwLjI2LDMuOTctMS4yMiw0LjIzLTMuM2MwLjAyLTAuMTksMC4wMy0wLjM4LDAuMDMtMC41N2w2LjM4LDAuMzZjMCwzLjM1LTIuMDUsOS4yOC0xMC42LDkuMjgKCWMtNS4yOSwwLTEyLjAzLTMuMDgtMTIuMDMtMTIuNDlzNi44Ny0xMi43LDEyLjAzLTEyLjdjNS41OS0wLjE5LDEwLjM1LDQsMTAuODQsOS41N2gtNi42M2MtMC4yNi0yLjEzLTIuMS0zLjcxLTQuMjUtMy42MwoJYy0zLjg3LDAtNC43OCw0LjE2LTQuNzgsNi43NUMxOC45NSwyNi41MiwxOS42MiwzMS41MiwyMy43MywzMS41MnoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTExLjc0LDI0LjhjMC05LjQyLDYuODctMTIuNywxMi4wMy0xMi43YzMuMjctMC4xLDYuMjYsMS4yOSw4LjI3LDMuNTlsNi45My02LjkzTDI1LjcsMS4xNgoJYy0xLjM5LTAuODktMy4xNi0wLjg5LTQuNTUsMEMxOC44NSwyLjUxLDcuNDcsOS4wNCw0LjA5LDExYy0xLjM0LDAuNzItMi4xNSwyLjE1LTIuMDgsMy42NnYxOS45Yy0wLjAyLDAuNzQsMC4xNSwxLjQ2LDAuNSwyLjExCgljMC4zNiwwLjY3LDAuOTEsMS4yLDEuNTgsMS41NmwzLjQ0LDEuOTRsNi45My02LjkzQzEyLjgyLDMxLjMxLDExLjc0LDI4LjU3LDExLjc0LDI0Ljh6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMy43MywxOC4wNWMtMy44NywwLTQuNzgsNC4xNi00Ljc4LDYuNzVjMCwwLjc0LDAuMTIsMi4wOCwwLjU4LDMuMzdsNy45Ny03Ljk2CglDMjYuNzksMTguODcsMjUuMzUsMTgsMjMuNzMsMTguMDV6Ii8+Cjwvc3ZnPg==',
  },
  {
    text: 'Using Wasmer with Javascript',
    link: 'https://docs.wasmer.io/integrations/js',
    icon:
      'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA0OCA0NiI+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOS40MiwyMy44OWMxLjM2LDIuMjMsMy4xMywzLjg3LDYuMjYsMy44N2MyLjYzLDAsNC4zMS0xLjMyLDQuMzEtMy4xNWMwLTIuMTktMS43Mi0yLjk2LTQuNjItNC4yNGwtMS41OS0wLjY4CgljLTQuNTgtMS45Ni03LjYyLTQuNDItNy42Mi05LjYxYzAtNC43OSwzLjYyLTguNDMsOS4yOS04LjQzYzQuMDMsMCw2LjkzLDEuNDEsOS4wMiw1LjExbC00Ljk0LDMuMTljLTEuMDktMS45Ni0yLjI2LTIuNzMtNC4wOC0yLjczCgljLTEuODYsMC0zLjAzLDEuMTktMy4wMywyLjczYzAsMS45MSwxLjE4LDIuNjksMy45LDMuODdsMS41OSwwLjY4YzUuMzksMi4zMiw4LjQzLDQuNjksOC40MywxMC4wMmMwLDUuNzQtNC40OSw4Ljg5LTEwLjUxLDguODkKCWMtNS44OSwwLTkuNy0yLjgyLTExLjU2LTYuNTJMMjkuNDIsMjMuODl6IE03LjAxLDI0LjQ0YzEsMS43OCwxLjksMy4yOCw0LjA4LDMuMjhjMi4wOCwwLDMuNC0wLjgyLDMuNC00LjAxVjIuMDJoNi4zNFYyMy44CgljMCw2LjYxLTMuODUsOS42MS05LjQ3LDkuNjFjLTUuMDgsMC04LjAyLTIuNjQtOS41MS01LjgzTDcuMDEsMjQuNDR6Ii8+Cjwvc3ZnPg==',
  },
];

export default tutorials;