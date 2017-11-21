Basic button:

```jsx
<Button>Push Me</Button>
```

Big pink button:

```jsx
<Button size="large" color="deeppink">Lick Me</Button>
```


```jsx
<div>
  <Button size="small" onClick={() => setState({isOpen: true})} disabled={state.isOpen}>Show Me</Button>
  {state.isOpen && <Button size="small" onClick={() => setState({isOpen: false})}>Hide Me</Button>}
</div>
```
