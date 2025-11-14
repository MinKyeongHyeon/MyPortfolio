"use client";
import { useState, useEffect } from "react";
import NumberDisplay, { type Digit } from "./NumberDisplay";

type MetricType = "runtime" | "commits" | "timer";

export default function Runtime() {
  const [currentMetric, setCurrentMetric] = useState<MetricType>("runtime");
  const [hours, setHours] = useState<number | null>(null);
  const [commits] = useState<number>(1234); // setCommits 제거
  const [seconds, setSeconds] = useState<number>(0);

  // Runtime (hours) 계산
  useEffect(() => {
    const sinceDate = new Date("2025-05-21T00:00:00");

    const calculateHours = () => {
      const now = new Date();
      const diffMs = now.getTime() - sinceDate.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      setHours(diffHours);
    };

    calculateHours();
    const timer = setInterval(calculateHours, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  // Timer (seconds) 계산
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 10000); // 0-9999 순환
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDigits = (num: number | null): Digit[] => {
    if (num === null) return [10, 10, 10, 10];

    const str = num.toString().padStart(4, "0");
    return [
      (parseInt(str[0]) || 0) as Digit,
      (parseInt(str[1]) || 0) as Digit,
      (parseInt(str[2]) || 0) as Digit,
      (parseInt(str[3]) || 0) as Digit,
    ];
  };

  // 현재 메트릭에 따라 값 가져오기
  const getCurrentValue = (): number | null => {
    switch (currentMetric) {
      case "runtime":
        return hours;
      case "commits":
        return commits;
      case "timer":
        return seconds;
      default:
        return null;
    }
  };

  const currentValue = getCurrentValue();
  const digits = getDigits(currentValue);

  const displayDigits: Digit[] =
    currentValue === null
      ? [10, 10, 10, 10]
      : digits.map((digit, index) => {
          if (index === 0 && currentValue < 1000) return 10;
          if (index === 1 && currentValue < 100) return 10;
          if (index === 2 && currentValue < 10) return 10;
          return digit;
        });

  // 메트릭 순환
  const cycleMetric = () => {
    const metrics: MetricType[] = ["runtime", "commits", "timer"];
    const currentIndex = metrics.indexOf(currentMetric);
    const nextIndex = (currentIndex + 1) % metrics.length;
    setCurrentMetric(metrics[nextIndex]);
  };

  // 현재 메트릭에 따른 라벨과 단위
  const getMetricInfo = () => {
    switch (currentMetric) {
      case "runtime":
        return { label: "Runtime", unit: "hours / since 2025 05 21" };
      case "commits":
        return { label: "Commits", unit: "total commits" };
      case "timer":
        return { label: "You've been", unit: "seconds here" };
    }
  };

  const metricInfo = getMetricInfo();

  return (
    <section className="w-[341px] flex flex-col gap-[9px]">
      <button
        type="button"
        onClick={cycleMetric}
        className="font-mono text-2xl text-[#F66918] text-left"
      >
        {metricInfo.label}
      </button>
      <figure>
        <div aria-label="Learning Journey">
          <div className="flex gap-0.5">
            <NumberDisplay digit={displayDigits[0]} />
            <NumberDisplay digit={displayDigits[1]} />
            <NumberDisplay digit={displayDigits[2]} />
            <NumberDisplay digit={displayDigits[3]} />
          </div>
        </div>
        <figcaption className="font-mono text-[#F66918] text-right">
          {metricInfo.unit}
        </figcaption>
      </figure>
    </section>
  );
}
