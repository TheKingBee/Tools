# bashtips

## A searchable process table 
```alias psg="ps aux | grep -v grep | grep -i -e VSZ -e" ```

So the command:

``` $ psg bash ```

returns the output of the process table (aka the `ps` command) grepped for "bash":

``` USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND

1001      5227  0.0  0.0  26320  3376 pts/0    Ss   16:29   0:00 bash```
