#include <stdio.h>

int main(void) {
	int a[3] = {1, 2, 3};
	printf("%d %d %d\n", a[0], a[1], a[2]);
	//주소를 찍어줘
	printf("%p\n", a);
	printf("%d\n", *(a + 0));
	printf("%d\n", *(a + 1));
	printf("%d\n", *(a + 2));
	printf("%d\n", *(a + 3));
	
	printf("%d\n", *(0 + a));
	printf("%d\n", *(1 + a));
	printf("%d\n", *(2 + a));

	printf("%d %d %d\n", 0[a], 1[a], 2[a]);
	return 0;
}
