import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function ProductDemo() {
  return (
    <section id="demo" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Experience RoboTech Solutions in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how our collaborative robots enhance productivity, precision, and efficiency in industrial automation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                {/* Replace src with the actual demo video URL */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID?si=YOUR_VIDEO_ID"
                  title="RoboTech Solutions Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Revolutionizing Industrial Automation
                </h3>
                <p className="text-muted-foreground mb-4">
                  See how our collaborative robots streamline assembly lines, improve quality control, and optimize warehouse operations.
                </p>
                <Button className="gap-2">
                  <Play className="h-4 w-4" /> Watch Full Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}