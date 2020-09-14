# UROP 4주차

과제: 간단한 convolution 연산해보기
연산을 구현하는 것 자체는 그렇게 어렵지 않았다.


Makefile 만들기
`USER_SOURCE_FILES   += $(patsubst ../src/naive_conv/%, %, $(wildcard ../src/naive_conv/*.c))` \
위와 같은 코드를 이해할 수 있어야 한다.


__[linking 단계에서 다음과 같은 문제 발생]__

::: details Error Messages
```
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-sbrkr.o): in function `_sbrk_r':
sbrkr.c:(.text._sbrk_r+0xc): undefined reference to `_sbrk'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-writer.o): in function `_write_r':
writer.c:(.text._write_r+0x14): undefined reference to `_write'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-closer.o): in function `_close_r':
closer.c:(.text._close_r+0xc): undefined reference to `_close'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-fstatr.o): in function `_fstat_r':
fstatr.c:(.text._fstat_r+0x12): undefined reference to `_fstat'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-isattyr.o): in function `_isatty_r':
isattyr.c:(.text._isatty_r+0xc): undefined reference to `_isatty'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-lseekr.o): in function `_lseek_r':
lseekr.c:(.text._lseek_r+0x14): undefined reference to `_lseek'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-readr.o): in function `_read_r':
readr.c:(.text._read_r+0x14): undefined reference to `_read'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-abort.o): in function `abort':
abort.c:(.text.abort+0xa): undefined reference to `_exit'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-signalr.o): in function `_kill_r':
signalr.c:(.text._kill_r+0x12): undefined reference to `_kill'
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libc.a(lib_a-signalr.o): in function `_getpid_r':
signalr.c:(.text._getpid_r+0x0): undefined reference to `_getpid'
collect2: error: ld returned 1 exit status
make: *** [Makefile:202: bin/Naive_Conv.axf] Error 1
```
:::

_[해결방법]_
[여기](https://stackoverflow.com/questions/19419782/exit-c-text0x18-undefined-reference-to-exit-when-using-arm-none-eabi-gcc) 포스트를 참고해서, \
Makefile 의 LFLAGS에 --specs=nosys.specs 를 추가 
> 이렇게 하면 binary의 크기가 필요이상으로 커진다는 포스트도 보았는데 정말 그런지는 앞으로 확인을 해봐야 할 듯. 해당 포스트에서는 --specs=nano.specs 를 함께 사용해줘야 한다는 말이 있었다. 그런데 그 포스트가 말이 안되는 것 같은게, malloc, free 같은 함수를 사용하는데 있어서 안전장치가 제거된 spec이 nosys.specs 라는데 바이너리의 크기가 더 클 이유가 있나?


__[그럼에도 나타나는 에러]__ \
```
 Linking gcc bin/Naive_Conv.axf
/home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/bin/ld: /home/jungyoon/gcc_arm/gcc-arm-none-eabi-9-2020-q2-update/bin/../lib/gcc/arm-none-eabi/9.3.1/../../../../arm-none-eabi/lib/thumb/v7e-m+fp/hard/libnosys.a(sbrk.o): in function `_sbrk':
sbrk.c:(.text._sbrk+0x18): undefined reference to `end'
```
위와 같이 계속해서 파일을 링킹하는데서 문제가 발생,

_[해결방법]_ \
구글링 결과, 일단 linker script를 살짝 바꿔주면 된다고 해서, gcc 폴더 안에 있는 template_link.ld 에 end=.; 한 줄을 추가. 그런데 `sbrk.o` 가 heap 메모리와 관련이 있다고(heap 메모리가 stack영역을 침범하지 않도록 하는 기능도 있다는 것 같고) 하는데 이렇게 허술하게 땜질을 해도 되는지 모르겠음. -> `nosys.specs`를 사용해서 그런가 printf도 작동을 하지 않는다.

__[printf를 사용할 수 없는 문제]__ \
sparfun sdk에서 제공해주는 library만 사용을 하려고 해서 그랬는지, printf가 작동을 하지 않는다. \
printf 를 사용하고 싶으면 printf 부분을 모두 `am_util_stdio_printf` 로 바꿔줘야 한다.