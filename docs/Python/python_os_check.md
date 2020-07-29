# How to check directory paths in python

일단 os 모듈을 활용해야 한다.

아래는 tensorflow EagerExecution에 관한 설명에서 가져온 코드이다.

```py
checkpoint_dir = 'path/to/model_dir'
if not os.path.exists(checkpoint_dir):
  os.makedir(checkpoint_dir)
checkpoint_prefix = os.path.join(checkpoint, "ckpt")

root = tf.train.Checkpoint(optimizer=optimizer, 
                           model = model)

root.save(checkpoint_prefix)
root.restore(tf.train.latest_checkpoint(checkpoint_dir))
```

> 차후에 os 모듈에 관한 내용을 추가해보도록 하겠다.
