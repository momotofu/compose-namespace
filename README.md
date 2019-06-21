# Compose Class

Takes a main css class for a component and
an optional overriding class or classes (array)
and returns a function which constructs a class strings.

```
function composeClass(
  string, [
      string of classes,
      single classString,
      Array of classes
  ]
)
```


For example if given the main class of APMDrawer
and the overriding class of className:

```
const cc = composeClass('APMDrawer', 'className')

cc('bg')
// 'APMDrawer-bg className-bg'

cc('bg', 'container')
// 'APMDrawer-bg className-bg APMDrawer-containter className-container'

const cc = composeClass('mainClass', ['jam', 'cake', 'fig'])

cc('jello', 'frosting')
// 'mainClass-jello mainClass-frosting jam-jello
jam-frosting cake-jello cake-frosting fig-jello fig-frosting'
```
